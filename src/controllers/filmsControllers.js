const services = require("../services/filmService");


const getAllFilms = async (req,res) => { 
    const allFilms = await services.getAllFilms();
    res.json(allFilms);
 };


 const postCreateFilm = async (req,res) => { 
    const allFilms = await services.createFilm();
    res.json(allFilms);
 };


 module.exports = {getAllFilms};