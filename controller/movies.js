const movies = require('../movies')

const getAllMovies = (request, response) => {
    return response.send(movies)
}

const getMoviesByTitleOrDirector = (request, response) => {
    const { searchTitleOrDirector } = request.params
    const movieTitleOrDirector = movies.filter((movie) => movie.title.toLowerCase().includes(searchTitleOrDirector) || 
    movie.directors.toString().toLowerCase().includes(searchTitleOrDirector))
    return response.send(movieTitleOrDirector)

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
