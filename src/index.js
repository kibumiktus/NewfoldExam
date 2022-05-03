const bodyParser = require('body-parser')
const express = require('express')
const swaggerUi = require('swagger-ui-express')

const { apiRoot, port } = require('./config')
const swaggerDocument = require("./api/swaggerDocument")
const {
    cinema: cinemaController,
    movie: movieController,
    showtime: showtimeController,
    screen: screenController
} = require("./controllers/")

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get(`${apiRoot}/cinemas`, cinemaController.getCinemas)
app.post(`${apiRoot}/cinemas`, cinemaController.createCinema)
app.get(`${apiRoot}/movies`, movieController.getMovies)
app.post(`${apiRoot}/movies`, movieController.createMovie)
app.get(`${apiRoot}/cinemas/:cinemaId/showtimes`, showtimeController.getShowtimesByCinema)
app.get(`${apiRoot}/cinemas/:cinemaId/screens`, screenController.getScreens)
app.post(`${apiRoot}/cinemas/:cinemaId/screens`, screenController.createScreen)
app.get(`${apiRoot}/cinemas/:cinemaId/screens/:screenId/showtimes`, showtimeController.getShowtimesByScreen)
app.post(`${apiRoot}/cinemas/:cinemaId/screens/:screenId/showtimes`, showtimeController.createShowtime)
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})