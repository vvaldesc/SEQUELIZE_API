const Film = require("./modelFilms/filmsModel");
const Director = require("./directorFilms/directorModel");

Film.belongsTo(Director);
Director.hasMany(Film);