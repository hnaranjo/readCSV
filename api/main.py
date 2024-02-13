from fastapi import FastAPI, Body
from fastapi.responses import HTMLResponse

app = FastAPI()
app.title = "Mi aplicación con FastApi"
app.version = "0.0.1"

movies = [
    {
        "id": 1,
        "title": "Avatar",
        "Overview": "En un exuberante planeta llamado Pandora viven los Na'vi,",
        "year": "2009",
        "rating": 7.8,
        "category": "Acción"
    },
    {
        "id": 2,
        "title": "La sociedad de la nieve",
        "Overview": "The flight of a rugby team crashes on a glacier in the Andes. The few passengers who survive the crash find themselves in one of the world's toughest environments to survive.",
        "year": "2023",
        "rating": 7.9,
        "category": "Drama"
    },
    {
        "id": 3,
        "title": "Madame web",
        "Overview": "Cassandra Webb develops the power to see the future. Forced to confront revelations about her past, she forges a relationship with three young women bound for powerful destinies, if they can all survive a deadly present.",
        "year": "2024",
        "rating": 0.0,
        "category": "Acción"
    },
    {
        "id": 4,
        "title": "Los asesinos de la luna",
        "overview": "En la década de 1920 en los Estados Unidos, miembros de la tribu Osage son asesinados bajo misteriosas circunstancias, provocando una importante investigación del FBI involucrando a J. Edgar",
        "year": 2023,
        "rating": 7.7,
        "category": "Drama"
    }
]


@app.get('/', tags=['Home'])
def message():
    return HTMLResponse('<h1>Hello World</h1>')


@app.get('/movies', tags=['movies'])
def get_movies():
    return movies


@app.get('/movies/{id}', tags=['movies'])
def get_movie(id: int):
    for item in movies:
        if item["id"] == id:
            return item
    return []


@app.get('/movies/', tags=['movies'])
def get_movies_by_category(category: str, year: int):
    for item in movies:
        return [item for item in movies if item["category"] == category]


@app.post('/movies', tags=['movies'])
def create_movie(id: int = Body(), title: str = Body(), overview: str = Body(), year: int = Body(), rating: float = Body(), category: str = Body()):
    movies.append(
        {
            "id": id,
            "title": title,
            "overview": overview,
            "year": year,
            "rating": rating,
            "category": category
        }
    )
    return movies


@app.put('/movies/{id}', tags=['movies'])
def update_movie(id: int, title: str = Body(), overview: str = Body(), year: int = Body(), rating: float = Body(), category: str = Body()):
    for item in movies:
        if item["id"] == id:
            item['title'] = title,
            item['overview'] = overview,
            item['year'] = year,
            item['rating'] = rating,
            item['category'] = category,
            return movies


@app.delete('/movies/{id}', tags=['movies'])
def delete_movie(id: int):
    for item in movies:
        if item["id"] == id:
            movies.remove(item)
            return movies
