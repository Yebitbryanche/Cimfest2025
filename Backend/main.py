from fastapi import FastAPI
from routes import user
from db import create_db_and_tables

app = FastAPI()

@app.on_event("startup")
def start_up():
    create_db_and_tables()

app.include_router(user.router)