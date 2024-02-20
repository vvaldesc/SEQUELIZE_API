const Actor = require("../bd/models/actorModel")

const getAllActors = async() => {
    const allActor = await Actor.getAll();
    return allActor[0];
}

const createActor= async (directorData) => {
    const newActor = await Actor.create(actorData);
    return newActor;
}


module.exports = { getAllActors,createActor };