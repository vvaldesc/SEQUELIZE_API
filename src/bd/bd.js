const { Sequelize } = require("sequelize")

const sequelize = new Sequelize ('filmsbd','root','',{
    host: "localhost",
    dialect: "mysql",
})

module.exports = sequelize