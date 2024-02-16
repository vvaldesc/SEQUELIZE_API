const { DataTypes, Model } = require('sequelize');
const sequelize = require('../bd');


class film extends Model {}
film.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        unique: {
          args: true,
          msg: 'Title already exists'
        }
      },
    },
  description: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  score: {
    type: DataTypes.CHAR
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