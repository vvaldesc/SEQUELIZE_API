const Film = require("./models/filmsModel");
const Director = require("./models/directorModel");
const Actor = require("./models/actorModel");
const Performed_films = require("./models/performed_films");

Film.belongsTo(Director);
Director.hasMany(Film);

Actor.belongsToMany(Film, { through: Performed_films });
Film.belongsToMany(Actor, { through: Performed_films });

Performed_films.hasMany(Film);
Film.belongsTo(Performed_films);

Performed_films.belongsTo(Actor);
Actor.hasMany(Performed_films);
