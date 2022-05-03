const { ScreenModel } = require("./mongoConnection")
let maxIdValue = 0
async function createScreen(screen) {
    var model = Object.assign({}, screen, { "id": ++maxIdValue })
    await ScreenModel.create(model)
    return model
}
async function getScreensByCinemaId(cinemaId) {
    return await ScreenModel.find( { cinemaId: cinemaId } )
}
module.exports = { getScreensByCinemaId, createScreen }
