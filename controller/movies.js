const movies = require('../movies')

const getAllMovies = (request, response) => {
    return response.send(movies)
}

const getMoviesByTitleOrDirector = (request, response) => {
    const { searchTitle } = request.params
    const movieTitle = movies.filter((movie) => movie.title.toLowerCase().includes(searchTitle) || 
    movie.directors.toString().toLowerCase().includes(searchTitle))
    return response.send(movieTitle)

}

const saveNewMovie = (request, response) => {
    const { title, directors, releaseDate, rating, runTime, genres } = request.body;

    if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
        return response.status(400).send('The following fields are required: title, directors, releaseDate, rating, runTime, genres');
    }

    const newMovie = { title, directors, releaseDate, rating, runTime, genres };
    movies.push(newMovie);
    return response.status(201).send(newMovie);
}

module.exports= { getAllMovies, getMoviesByTitleOrDirector, saveNewMovie }
