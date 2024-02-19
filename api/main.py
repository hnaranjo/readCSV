from fastapi import FastAPI, Body, Path, Query
from fastapi.responses import HTMLResponse, JSONResponse
from typing import List
from data import movies
from jwt_manager import create_token

from model.Movie import Movie
from model.Category import Category
from model.User import User

app = FastAPI()
app.title = "Mi aplicación con FastApi"
app.version = "0.0.1"


@app.get('/', tags=['Home'])
def message():
    return HTMLResponse('<h1>Hello World</h1>')


@app.post('/login', tags=['auth'])
def login(user: User):
    return user


@app.get('/movies', tags=['movies'], response_model=List[Movie], status_code=200)
def get_movies() -> List[Movie]:
    return JSONResponse(status_code=200, content=movies)


@app.get('/movies/{movie_id}', tags=['movies'], response_model=Movie)
def get_movie(movie_id: int = Path(ge=1, le=2000)) -> Movie:
    for item in movies:
        if item["id"] == movie_id:
            return JSONResponse(content=item)
    return JSONResponse(status_code=404, content=[])


@app.get('/movies/', tags=['movies'], response_model=List[Movie])
def get_movies_by_category(category: str = Query(min_length=5)) -> List[Movie]:
    data = [item for item in movies if item["category"] == category]
    return JSONResponse(content=data)


@app.post('/movies', tags=['movies'], response_model=dict, status_code=201)
def create_movie(movie: Movie) -> dict:
    movies.append(movie)
    return JSONResponse(status_code=201, content={"message": "Se ha registrado la película"})


@app.put('/movies/{movie_id}', tags=['movies'], response_model=dict, status_code=200)
def update_movie(movie_id: int, movie: Movie) -> dict:
    for item in movies:
        if item["id"] == movie_id:
            item['title'] = movie.title
            item['overview'] = movie.overview
            item['year'] = movie.year
            item['rating'] = movie.rating
            item['category'] = movie.category
            return JSONResponse(status_code=200, content={"message": "Se ha modificado la película"})


@app.delete('movies/{movie_id}', tags=['movies'], response_model=dict, status_code=200)
def delete_movie(movie_id: int) -> dict:
    for item in movies:
        if item["id"] == movie_id:
            movies.remove(item)
            return JSONResponse(status_code=200, content={"message": "Se ha eliminado la película"})
