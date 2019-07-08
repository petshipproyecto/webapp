module.exports = {
  database: 'petship',
  username: 'root',
  password: 'petship',
  host: 'localhost',
  port: 3306,
  protocol: null,
  params: {
    dialect: 'mysql',
    define: {
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_spanish2_ci'
      },
      timestamps: false
    }
  }
};