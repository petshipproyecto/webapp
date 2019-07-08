module.exports = (sequelize, DataType) => {

    const Raza = sequelize.define('Raza', {
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
  
    Raza.associate = (models) => {
        Raza.belongsTo(models.Animal, {foreignKey: "AnimalId"});
    };
  
    return Raza;
  };