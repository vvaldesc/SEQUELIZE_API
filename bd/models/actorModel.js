const { DataTypes, Model } = require('sequelize');
const sequelize = require('../bd');


class actor extends Model {}
actor.init({
  // Model attributes are defined here
  dni: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50)
  },
  direccion: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
    sueldo: {
    type: DataTypes.INTEGER,
    validate: {
      isNumeric: true,
      isInt: true,
      max: 33000,
      min: 0
    }
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'actor' // We need to choose the model name
});


module.exports = actor;