const rutasExpress = require("express").Router();

const peliculascontroller = require("../controllers/directorsControllers");


rutasExpress.get("/",peliculascontroller.getAllDirectors)
rutasExpress.post("/",peliculascontroller.getAllDirectors)


module.exports = rutasExpress;