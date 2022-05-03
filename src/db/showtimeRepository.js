const { ShowtimeModel } = require("./mongoConnection")
let maxIdValue = 0
async function createShowtime(showtime) {
    var model = Object.assign({}, showtime, { "id": ++maxIdValue })
    await ShowtimeModel.create(model)
    return model
}
async function getShowtimesByCinemaId(cinemaId, startOn) {
    return await ShowtimeModel.find( { cinemaId: cinemaId } )
}
async function getShowtimesByScreenId(screenId, startOn) {
    return await ShowtimeModel.find( { screenId: screenId, startOn: startOn } )
}
module.exports = { getShowtimesByScreenId, getShowtimesByCinemaId, createShowtime }
