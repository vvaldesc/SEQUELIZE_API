const sequelize = require('../bd/bd');

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require('../bd/associations');

app.use(express.json());
app.use(bodyParser.json());

const routesFilms = require("./routes/filmsRoutes");
const routesDirectors = require("./routes/directorsRoutes");
const routesActors = require("./routes/actorRoutes");
const routesPerformed_films = require("./routes/performed_filmsRoutes");

app.use("/films", routesFilms);
app.use("/directors", routesDirectors);
app.use("/actors", routesActors);
app.use("/performed_films", routesPerformed_films);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("express escuchando en el puerto 👍 " + PORT);
  sequelize
    .sync({force : false})
    .catch((error) => { console.log(error) });
});