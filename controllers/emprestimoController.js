const Emprestimo = require('../models/Emprestimo');
const Usuario = require('../models/Usuario');
const Livro = require('../models/Livro');

exports.listarEmprestimos = async (req, res) => {
    try {
        const emprestimos = await Emprestimo.findAll({ include: [Usuario, Livro] });
        const usuarios = await Usuario.findAll(); // Buscar todos os usuários
        const livros = await Livro.findAll(); // Buscar todos os livros

        // Renderizar a página de empréstimos com a lista de empréstimos, usuários e livros
        res.render('emprestimos', { emprestimos, usuarios, livros });
    } catch (error) {
        console.error('Erro ao listar empréstimos:', error);
        res.status(500).send('Erro ao listar empréstimos.');
    }
};

exports.emprestarLivro = async (req, res) => {
  const { usuarioId, livroId } = req.body;
  await Emprestimo.create({ UsuarioId: usuarioId, LivroId: livroId });
  res.redirect('/emprestimos');
};

exports.devolverLivro = async (req, res) => {
  const { id } = req.params;
  await Emprestimo.update({ dataDevolucao: new Date() }, { where: { id } });
  res.redirect('/emprestimos');
};
