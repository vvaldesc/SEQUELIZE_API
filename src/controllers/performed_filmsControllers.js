const services = require("../services/performed_filmService.js");


const getAllperformed_films = async (req,res) => { 
    const allperformed_films = await services.getAllperformed_films();
    res.json(allperformed_films);
 };


 const postCreateperformed_film = async (req,res) => { 
    const allperformed_films = await services.createperformed_film();
    res.json(allperformed_films);
 };


 module.exports = {getAllperformed_films};