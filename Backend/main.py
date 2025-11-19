from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import user
from routes import lyrics
from db import create_db_and_tables

app = FastAPI()

origin = "http://localhost:5173"

app.add_middleware(
    CORSMiddleware,
    allow_origins = [origin],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

@app.on_event("startup")
def start_up():
    create_db_and_tables()

app.include_router(user.router)

app.include_router(lyrics.router)