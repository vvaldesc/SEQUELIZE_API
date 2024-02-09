const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class film extends Model {}
film.init({
  // Model attributes are defined here
  ide: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  score: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  director: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'film' // We need to choose the model name
});


module.exports = film;