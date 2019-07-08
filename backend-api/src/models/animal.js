module.exports = (sequelize, DataType) => {

    const Animal = sequelize.define('Animal', {
      Id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Descripcion: {
        type: DataType.STRING,
        allowNull: false,
      }
    });
  
    Animal.associate = (models) => {
        Animal.hasMany(models.Raza);
    };
  
    return Animal;
  };