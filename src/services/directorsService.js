const Directors = require("../../bd/models/directorModel")

const getAllDirectors = async() => {
    const allDirectors = await Directors.findAll();
    return allDirectors[0];
}

const createDirector = async (directorData) => {
    const newDirector = await Directors.create(directorData);
    return newDirector;
}


module.exports = { getAllDirectors,createDirector };
