const services = require("../services/directorsService.js");


const getAllDirectors = async (req,res) => { 
    const allDirectors = await services.getAllDirectors();
    res.json(allDirectors);
 };


 const postCreateFilm = async (req,res) => { 
    const allDirectors = await services.createDirector();
    res.json(allDirectors);
 };


 module.exports = {getAllDirectors, postCreateFilm};