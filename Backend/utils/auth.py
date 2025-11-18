from fastapi import Depends, HTTPException
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer
from typing import Annotated, Optional
from jose import jwt, JWTError
from models.Models import User
from db import engine
from sqlmodel import select, Session
from config import settings

def get_session():
    with Session(engine) as session:
        yield session

SessionDep = Annotated[Session, Depends(get_session)]

oauth2_bearer = OAuth2PasswordBearer(tokenUrl = 'login')

def create_access_token(data:dict, expires_delta:Optional[timedelta] = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes = 30))
    to_encode.update({"exp":expire})
    return jwt.encode(to_encode, settings.SECRETE, algorithm=settings.ALGORITHM)

def get_user_by_email(session: SessionDep, email: str) -> Optional[User]:
    return session.exec(
        select(User).where(User.email == email)
    ).first()


def authenticate_user(session: SessionDep, email: str, password: str):
    user = get_user_by_email(session, email)
    if not user or not user.check_password(password):
        return None
    return user


async def get_current_user(
        session: SessionDep,
        token: str = Depends(oauth2_bearer)
):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(token, settings.SECRETE, algorithms=[settings.ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    user = get_user_by_email(session, email)
    if user is None:
        raise credentials_exception

    return user
