const express = require('express');
const app = express();
const sequelize = require('./config/database');
const usuarioRoutes = require('./routes/usuarioRoutes');
const livroRoutes = require('./routes/livroRoutes');
const emprestimoRoutes = require('./routes/emprestimoRoutes');
const Emprestimo = require('./models/Emprestimo')
const Usuario = require('./models/Usuario')
const Livro = require('./models/Livro')
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Rotas
app.get('/', async (req, res) => {
    try {
      // Buscar todos os empréstimos, incluindo os usuários e livros relacionados
      const emprestimos = await Emprestimo.findAll({ include: [Usuario, Livro] });
      
      // Renderizar a página index.ejs com os dados de empréstimos
      res.render('index', { emprestimos });
    } catch (error) {
        console.error('Erro ao carregar a página principal:', error);
      res.status(500).send('Erro ao carregar a página principal.');
    }
  });
app.use('/usuarios', usuarioRoutes);
app.use('/livros', livroRoutes);
app.use('/emprestimos', emprestimoRoutes);

// Sincroniza o banco de dados e inicia o servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
