const services = require("../services/actorsService.js");


const getAllActors = async (req,res) => { 
    const allActors = await services.getAllActors();
    res.json(allActors);
 };


 const postCreateActor = async (req,res) => { 
    const allActors = await services.createActor(req.body);
    res.json(allActors);
 };


 module.exports = {getAllActors, postCreateActor};