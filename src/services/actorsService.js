const Actor = require("../../bd/models/actorModel")

const getAllActors = async() => {
    const allActor = await Actor.findAll();
    return allActor;
}

const createActor= async (actorData) => {
    const newActor = await Actor.create(actorData);
    return newActor;
}


module.exports = { getAllActors,createActor };