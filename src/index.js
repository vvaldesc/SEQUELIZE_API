const sequelize = require('./bd/bd');
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

require('./bd/associations');

app.use(express.json());
const routes = require("./routes/filmsRoutes");
app.use("/peliculas", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("express escuchando en el puerto 👍 " + PORT);
  sequelize
    .sync({force : true})
    .catch((error) => { console.log(error) });
});