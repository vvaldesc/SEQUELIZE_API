const rutasExpress = require("express").Router();

const peliculascontroller = require("../controllers/filmsControllers");


rutasExpress.get("/",peliculascontroller.getAllFilms)
rutasExpress.post("/",peliculascontroller.getAllFilms)


module.exports = rutasExpress;