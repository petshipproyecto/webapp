
const sequelize = require('../libs/config');
const Sequelize = require('sequelize');
    const Animal = sequelize.define('Animal', {
      Id_animal: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  
    Animal.associate = (models) => {
        Animal.hasMany(models.Raza);
    };
  
    module.exports =  Animal;
  