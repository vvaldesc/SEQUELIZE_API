const Directors = require("../bd/modelDirectors/directorModel")

const getAllDirectors = async() => {
    const allDirectors = await Directors.getAll();
    return allDirectors[0];
}

const createDirector = async (directorData) => {
    const newDirector = await Directors.create(directorData);
    return newDirector;
}


module.exports = { getAllDirectors };
