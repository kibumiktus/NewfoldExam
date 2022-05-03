const status = require("http-status")
const showtimeValidator = require("../validators/showtime")
const showtimeRepository = require("../db/showtimeRepository")

async function getShowtimesByCinema(req, res) {
    const storedModel = await showtimeRepository.getShowtimesByCinemaId(req.params.cinemaId, req.query.startOn)
    res.json(storedModel)
}
async function getShowtimesByScreen(req, res) {
    const storedModel = await showtimeRepository.getShowtimesByScreenId(req.params.screenId, req.query.startOn)
    res.json(storedModel)
}
async function createShowtime(req, res) {
    let inputModel = req.body;
    const { error, value } = showtimeValidator.validate(inputModel);
    if (error) {
        res.status(status['UNPROCESSABLE_ENTITY'])
        res.json( { error: error.message } )
    } else {
        const storedModel = await showtimeRepository.createShowtime(value)
        res.json(storedModel)
    }
}
module.exports = { getShowtimesByCinema, getShowtimesByScreen, createShowtime };