const performed_films = require("../../bd/models/performed_films.js")

const getAllperformed_films = async() => {
    const allempleados = await performed_films.findAll();
    return allempleados[0];
}

const createperformed_film = async (performed_filmData) => {
    const newperformed_film = await performed_films.create(performed_filmData);
    return newperformed_film;
}


module.exports = { getAllperformed_films };
