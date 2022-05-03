const { CinemaModel } = require("./mongoConnection")
let maxIdValue = 0
async function createCinema(cinema) {
    var model = Object.assign({}, cinema, { "id": ++maxIdValue })
    await CinemaModel.create(model)
    return model
}
async function getCinemas() {
    return await CinemaModel.find()
}
module.exports = { getCinemas, createCinema }
