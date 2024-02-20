const Films = require("../bd/models/filmsModel")

const getAllFilms = async() => {
    const allempleados = await Films.getAll();
    return allempleados[0];
}

const createFilm = async (filmData) => {
    const newFilm = await Films.create(filmData);
    return newFilm;
}


module.exports = { getAllFilms };
