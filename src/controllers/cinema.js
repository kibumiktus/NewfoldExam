const status = require("http-status")
const { cinema: cinemaValidator } = require("../validators")
const cinemaRepository = require("../db/cinemaRepository")
async function getCinemas(req, res) {
    const storedModel = await cinemaRepository.getCinemas()
    res.json(storedModel)
}
async function createCinema(req, res) {
    const inputModel = req.body
    const { error, value } = cinemaValidator.validate(inputModel)
    if (error) {
        res.status(status['UNPROCESSABLE_ENTITY'])
        res.json({error: error.message})
    } else {
        const storedModel = await cinemaRepository.createCinema(value)
        res.json(storedModel)
    }
}
module.exports = { getCinemas, createCinema }