const status = require("http-status")
const cinemaValidator = require("../validators/cinema.js")
async function getCinemas(req, res) {

}
async function createCinema(req, res) {
    let model = req.body;
    const { error, value } = cinemaValidator.validate(model);
    if (error) {
        res.status(status['UNPROCESSABLE_ENTITY'])
        res.json({error:error.message})
    }
}
module.exports = { getCinemas, createCinema };