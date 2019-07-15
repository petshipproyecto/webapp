module.exports = (sequelize, DataType) => {

    const Genero = sequelize.define('Genero', {
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
  
    Genero.associate = (models) => {
        Genero.hasMany(models.Perfil);
    };
  
    return Genero;
  };