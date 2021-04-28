const movies = require('../movies')

const getAllMovies = (request, response) => {
    return response.send(movies)
}

const getMoviesByTitle= (request, response) => {
    const { searchTitle} = request.params
    const movieTitle = movies.filter((movie) => movie.title === searchTitle)
    return response.send(movieTitle)

}

const saveNewMovie = (request, response) => {
    const { title, directors, releaseDate, rating, runTime, genres } = request.body;

    if (!id || !title|| !directors || !releaseDate || !rating || !runTime || !genres) {
        return response.status(400).send('The following fields are required: id, location, mascot, abbreviation, conference, division');
    }

    const newMovie = { title, directors, releaseDate, rating, runTime, genres };
    teams.push(newMovie);
    return response.status(201).send(newMovie);
}

module.exports= { getAllMovies, getMoviesByDirector }
