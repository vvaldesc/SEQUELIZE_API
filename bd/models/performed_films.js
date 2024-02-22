const { DataTypes, Model } = require('sequelize');
const sequelize = require('../bd');


class performed_films extends Model {}
performed_films.init({
  // Model attributes are defined here
  acting_role: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  fecha: {
    type: DataTypes.STRING(50)
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'performed_films' // We need to choose the model name
});


module.exports = performed_films;