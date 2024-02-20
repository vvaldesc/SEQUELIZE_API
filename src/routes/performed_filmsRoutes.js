const rutasExpress = require("express").Router();

const performed_filmscontroller = require("../controllers/performed_filmsController.js");


rutasExpress.get("/",performed_filmscontroller.getAllperformed_films)
//rutasExpress.post("/",performed_filmscontroller.postCreateperformed_film)


module.exports = rutasExpress;