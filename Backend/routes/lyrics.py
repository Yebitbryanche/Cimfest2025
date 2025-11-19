from http import client

from fastapi import APIRouter
from schemas.lyrics import LyricsRequest
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_KEY"))

router = APIRouter(tags=["Lyrics"])

@router.post("/generate-lyrics")
def generate_lyrics(payload: LyricsRequest):

    prompt = f"""
    Generate {payload.length} {payload.style} song lyrics about "{payload.topic}".
    Make it catchy, emotional, and unique.
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=300
    )

    lyrics = response.choices[0].message.content.strip()

    return {"lyrics": lyrics}