const mongoose = require("mongoose");

const Movie = mongoose.model('movie', {
     title: String,
     imdbId : String,
     poster : String,
     year : String  
});

module.exports = Movie;