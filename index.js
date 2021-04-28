const express = require('express')
const bodyParser = require('body-parser')
const movies = require('./movies')
const { getAllMovies, getMoviesByDirector, saveNewMovie } = require('./controller/movies')

const app = express()

app.get('/', getAllMovies)

app.get('/movies/:searchDirector', getMoviesByDirector) 

app.post('/', bodyParser.json(), saveNewMovie)
  
app.all('*', (request, response) => {
    return response.sendStatus(404)
})

app.listen(1341, () => {
    console.log('Listening on port 1341...'); //eslint-disable-line no-console
})