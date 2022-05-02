const status = require("http-status")
const showtimeValidator = require("../validators/showtime")
async function getShowtimesByCinema(req, res) {

}
async function getShowtimesByScreen(req, res) {

}
async function createShowtime(req, res) {
    let model = req.body;
    const { error, value } = showtimeValidator.validate(model);
    if (error) {
        res.status(status['UNPROCESSABLE_ENTITY'])
        res.json( { error:error.message } )
    } else {
        res.json( { ok:true } )
    }
}
module.exports = { getShowtimesByCinema, getShowtimesByScreen, createShowtime };