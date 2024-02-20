const rutasExpress = require("express").Router();

const directorescontroller = require("../controllers/directorsController");


rutasExpress.get("/",directorescontroller.getAllDirectors)
//rutasExpress.post("/",directorescontroller.postCreateFilm)


module.exports = rutasExpress;