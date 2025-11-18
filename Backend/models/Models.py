from sqlmodel import SQLModel, Field
from pydantic import EmailStr
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["argon2"], deprecated='auto')


class User(SQLModel, table=True):
    __tablename__ = "User"

    id:int = Field(primary_key=True,default=None)
    user_name:str = Field(index=True)
    email:EmailStr = Field(index=True)
    password_hash:str = Field()
    phone:str = Field(index=True)
    role:bool = Field(index=True)

    def set_role(self, role:bool):
        self.role = role

    def set_password(self, password:str):
        self.password_hash = pwd_context.hash(password)
     
     #code block to verify user password during login
    def check_password(self, password:str) -> bool:
        return pwd_context.verify(password, self.password_hash)

class Beats(SQLModel, table=True):
    __tablename__ = "Beats" 

    id:int = Field(primary_key=True,default=None)
    title:str = Field(index=True)
    Description:str = Field(index=True)
    Genre:str = Field(index=True)
    bmp:int = Field(index=True)
    Key:str = Field(index=True)
    price:float = Field(index=True)
    tags:str = Field(index=True)
    cover_image:bytes = Field(index=True)

class Like(SQLModel, table=True):
    id:int = Field(primary_key=True, default=None)
    user_id:int = Field(foreign_key=("User.id"))
    beat_id:int = Field(foreign_key=("Beats.id"))