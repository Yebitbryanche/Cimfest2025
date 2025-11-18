from pydantic import BaseModel


class LyricsRequest(BaseModel):
    topic: str
    style: str
    length: str
