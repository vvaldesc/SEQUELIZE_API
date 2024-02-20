const { DataTypes, Model } = require('sequelize');
const sequelize = require('../bd');


class director extends Model {}
director.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50)
  },
  direccion: {
    type: DataTypes.STRING(60),
    allowNull: false,
      unique: {
        args: true,
        msg: 'Title already exists'
      },
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
  modelName: 'director' // We need to choose the model name
});


module.exports = director;