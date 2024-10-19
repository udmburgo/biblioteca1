const { Sequelize } = require('sequelize');

// Configuração do banco de dados
const sequelize = new Sequelize('biblioteca_db', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',port:"3307"
});

sequelize.authenticate()
  .then(() => console.log('Conectado ao MySQL!'))
  .catch(err => console.error('Erro ao conectar ao MySQL:', err));

module.exports = sequelize;
