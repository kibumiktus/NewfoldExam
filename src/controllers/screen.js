const status = require("http-status")
const screenValidator = require("../validators/screen")
async function getScreens(req, res) {

}

async function createScreen(req, res) {
    let model = req.body;
    const { error, value } = screenValidator.validate(model);
    if (error) {
        res.status(status['UNPROCESSABLE_ENTITY'])
        res.json( { error:error.message } )
    } else {
        res.json( { ok:true } )
    }
}
module.exports = { getScreens,createScreen };