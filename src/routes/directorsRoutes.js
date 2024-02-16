const rutasExpress = require("express").Router();

const directorescontroller = require("../controllers/directorsControllers");


rutasExpress.get("/",directorescontroller.getAllDirectors)
rutasExpress.post("/",directorescontroller.getAllDirectors)


module.exports = rutasExpress;