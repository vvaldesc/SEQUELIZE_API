const Film = require("./modelFilms/filmsModel");
const Director = require("./modelDirectors/directorModel");

Film.belongsTo(Director);
Director.hasMany(Film);

