const { Model } = require('sequelize');
const Usuario = require('../models/Usuario');

exports.listarUsuarios = async (req, res) => {
    try{
        const Usuario = await model.findAll()
        res.render('listar', {Usuario: Usuario,error:null})

        }catch(error){
            console.error('Usuario não encontardo',error)

        }
        }
exports.CriarUsuario = async (req, res) => {
try{
    const nome = req.body.nome
    const telefone = req.body.telefone
    const função = req.body.função
    const Usuario =  await Model.create({
          nome: nome,
          telefone: telefone,
          função: função

    })
    res.redirect('/')
 }catch(error){
    console.error('Usuario não encontrado',error)
 }
}
