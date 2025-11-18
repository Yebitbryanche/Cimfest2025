from pydantic import BaseModel,EmailStr
from sqlmodel import SQLModel
from typing import Optional

class createUser(BaseModel):
    userName:str
    email:EmailStr
    password:str
    phone:str
    role:bool

class UserRead(SQLModel):
    id:int
    user_name:str
    email:EmailStr
    role:bool
    phone:int

class createBeat(BaseModel):
    id:int
    title:str 
    Description:str 
    Genre:str 
    bmp:int 
    Key:str 
    price:float 
    tags:str 
    cover_image:bytes 

class Token(SQLModel):
    access_token:str
    token_type:str

class TokenData(SQLModel):
    username:Optional[str] = None

class LoginRequest(BaseModel):
    email:str
    password:str