module.exports = (sequelize, DataType) => {

    const Perfil = sequelize.define('Perfil', {
      Id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Nombre: {
        type: DataType.STRING,
        allowNull: false,
      },
      FechaNacimiento: {
        type: DataType.DATE,
        allowNull: false,
      }
    });
  
    Perfil.associate = (models) => {
        Perfil.belongsTo(models.Raza, { foreignKey: 'RazaId' });
        Perfil.belongsTo(models.Genero, { foreignKey: 'GeneroId'});
        Perfil.belongsTo(models.Usuario, { foreignKey: 'UsuarioId'});
    };
  
    return Perfil;
  };