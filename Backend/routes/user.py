from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from datetime import timedelta
from schemas.schemas import UserRead, createUser
from models.Models import User
from db import get_session
from utils.auth import authenticate_user, create_access_token, get_current_user
from schemas.schemas import Token, TokenData, LoginRequest
from config import settings


router = APIRouter(tags=["Users"])

@router.post('/signup', response_model=UserRead)
def signup(user:createUser, session:Session = Depends(get_session)):
    existing_user = session.exec(select(User).where(User.user_name == user.userName)).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already taken")
    new_user = User(
        user_name = user.userName, 
        email=user.email, 
        phone = user.phone,
        role=user.role)
    new_user.set_password(user.password)
    session.add(new_user)
    session.commit()
    session.refresh(new_user)
    return new_user

@router.post('/login', response_model=Token)
def login(request:LoginRequest, session:Session = Depends(get_session)):
    user = authenticate_user(session, request.email,request.password)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    access_token = create_access_token(data={"sub":user.email},
                                       expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
                                       )
    return {"access_token":access_token, "token_type":"bearer"}

@router.get("/users/me", response_model=UserRead)
def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user