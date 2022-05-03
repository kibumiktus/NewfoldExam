const status = require("http-status")
const screenValidator = require("../validators/screen")
const screenRepository = require("../db/screenRepository")

async function getScreens(req, res) {
    const storedModel = await screenRepository.getScreensByCinemaId(req.params.cinemaId)
    res.json(storedModel)
}

async function createScreen(req, res) {
    let inputModel = req.body;
    const { error, value } = screenValidator.validate(inputModel);
    if (error) {
        res.status(status['UNPROCESSABLE_ENTITY'])
        res.json( { error: error.message } )
    } else {
        const storedModel = await screenRepository.createScreen(value)
        res.json(storedModel)
    }
}
module.exports = { getScreens,createScreen };