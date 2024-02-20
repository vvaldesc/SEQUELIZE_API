const rutasExpress = require("express").Router();

const actorscontroller = require("../controllers/actorsController");


rutasExpress.get("/",actorscontroller.getAllActors)
rutasExpress.post("/",actorscontroller.postCreateActor)


module.exports = rutasExpress;