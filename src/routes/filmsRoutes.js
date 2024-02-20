const rutasExpress = require("express").Router();

const peliculascontroller = require("../controllers/filmsController");

rutasExpress.get("/",peliculascontroller.getAllFilms)
//rutasExpress.post("/",peliculascontroller.getAllDirectors)


module.exports = rutasExpress;