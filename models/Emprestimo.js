const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Livro = require('./Livro');

const Emprestimo = sequelize.define('Emprestimo', {
  dataEmprestimo: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  dataDevolucao: {
    type: DataTypes.DATE
  }
});

Emprestimo.belongsTo(Usuario, { foreignKey: 'UsuarioId' });
Emprestimo.belongsTo(Livro, { foreignKey: 'LivroId' });

module.exports = Emprestimo;
