const status = require("http-status")
const { movie: movieValidator } = require("../validators")
const movieRepository = require("../db/movieRepository")

async function getMovies(req, res) {
    const storedModel = await movieRepository.getMovies()
    res.json(storedModel)
}
async function createMovie(req, res) {
    let inputModel = req.body
    const { error, value } = movieValidator.validate(inputModel)
    if (error) {
        res.status(status['UNPROCESSABLE_ENTITY'])
        res.json( { error: error.message } )
    } else {
        const storedModel = await movieRepository.createMovie(value)
        res.json(storedModel)
    }
}
module.exports = { getMovies, createMovie }