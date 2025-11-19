from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DB_URL: str
    SECRETE: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    OPENAI_KEY: str | None = None  

    class Config:
        env_file = ".env"

settings = Settings()
