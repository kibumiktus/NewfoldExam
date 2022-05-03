const mongoose = require('mongoose')
const { mongoConnectionString } = require('../config')
const { Schema } = mongoose
mongoose.connect(mongoConnectionString)

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open')
})
  
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err)
})

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected')
})

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  })
})
const cinemaSchema = new Schema({
  id:  Number,
  name: String,
  city:   String
})
const CinemaModel = mongoose.model("Cinema", cinemaSchema)
const screenSchema = new Schema({
  id:  Number,
  name: String,
  cinemaId: Number,
  capacity: Number
})
const ScreenModel = mongoose.model("Screen", screenSchema)
const movieSchema = new Schema({
  id:  Number,
  name: String,
  year:   Number,
  duration: Number
})
const MovieModel = mongoose.model("Movie", movieSchema)
const showtimeSchema = new Schema({
  id:  Number,
  movieId: Number,
  screenId: Number,
  cinemaId: Number,
  startOn: Date
})
const ShowtimeModel = mongoose.model("Showtime", showtimeSchema)
module.exports =  { CinemaModel, ScreenModel, MovieModel, ShowtimeModel }