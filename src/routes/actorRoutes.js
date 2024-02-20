const rutasExpress = require("express").Router();

const actorscontroller = require("../controllers/actorsControllers");


rutasExpress.get("/",actorscontroller.getAllActors)
rutasExpress.post("/",actorscontroller.postCreateActor)


module.exports = rutasExpress;