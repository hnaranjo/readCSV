import os
from jwt import encode
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv('SECRET-KEY')


def create_token(data: dict):
    token: str = encode(payload=data, key=api_key, algorithm="HS256")
    return token
