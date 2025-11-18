from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import user
from db import create_db_and_tables

app = FastAPI()

origin = "http://localhost:5173"

@app.add_middleware(
    allow_origins = [origin],
    allow_credentials = [True],
    allow_headers = ['*'],
    allow_methods = ['*']
)

@app.on_event("startup")
def start_up():
    create_db_and_tables()

app.include_router(user.router)