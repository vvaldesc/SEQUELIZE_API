const Actor = require("../bd/models/actorsModel")

const getAllActor = async() => {
    const allActor = await Actor.getAll();
    return allActor[0];
}

const createActor= async (directorData) => {
    const newActor = await Actor.create(actorData);
    return newActor;
}


module.exports = { getAllActors,createActors };
