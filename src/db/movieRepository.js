const { MovieModel } = require("./mongoConnection")
let maxIdValue = 0
async function createMovie(movie) {
    var model = Object.assign({}, movie, { "id": ++maxIdValue })
    await MovieModel.create(model)
    return model
}
async function getMovies() {
    return await MovieModel.find()
}
module.exports = { getMovies, createMovie }
