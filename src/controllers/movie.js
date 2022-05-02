const status = require("http-status")
const movieValidator = require("../validators/movie")
async function getMovies(req, res) {

}
async function createMovie(req, res) {
    let model = req.body;
    const { error, value } = movieValidator.validate(model);
    if (error) {
        res.status(status['UNPROCESSABLE_ENTITY'])
        res.json( { error:error.message } )
    } else {
        res.json({ok:true})
    }
}
module.exports = { getMovies, createMovie };