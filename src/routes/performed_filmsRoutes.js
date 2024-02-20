const rutasExpress = require("express").Router();

const performed_filmscontroller = require("../controllers/performed_filmsControllers.js");


rutasExpress.get("/",performed_filmscontroller.getAllperformed_films)
rutasExpress.post("/",performed_filmscontroller.postCreateperformed_film)


module.exports = rutasExpress;