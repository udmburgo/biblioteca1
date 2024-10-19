const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Livro = sequelize.define('Livro', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  editora: {
    type: DataTypes.STRING,
    allowNull: false
  },
  anoPublicacao: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Livro;
