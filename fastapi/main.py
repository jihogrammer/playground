from typing import Union
import json

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from stock.service import service as stock_service


app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
    "http://http://43.200.83.87:50983",
    "https://jihogrammer.github.io",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"]
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/stock")
def read_item(code: Union[str, None] = '005930'):
    return stock_service.fetch_day_candle_one_year(code)
