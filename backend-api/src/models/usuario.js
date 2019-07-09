module.exports = (sequelize, DataType) => {

    const Usuario = sequelize.define('Usuario', {
      Id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Email: {
        type: DataType.STRING,
        allowNull: false,
      },
      Password: {
        type: DataType.STRING,
        allowNull: false,
      },
      NombreUsuario: {
        type: DataType.STRING,
        allowNull: false,
      },
      Nombre: {
        type: DataType.STRING,
        allowNull: false,
      },
      Apellido: {
        type: DataType.STRING,
        allowNull: false,
      },
      FechaNacimiento: {
        type: DataType.DATE,
        allowNull: false,
      }
    });
  
    Usuario.associate = (models) => {
        Usuario.hasMany(models.Perfil);
    };
  
    return Usuario;
  };