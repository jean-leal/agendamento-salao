const express = require('express');
const router = express.Router();

const Colaborador = require('../models/colaborador');
const Cliente = require('../models/cliente');
const Salao = require('../models/salao');
const Servico = require('../models/servico');
const Agendamento = require('../models/agendamento');

router.post('/', async (req, res) =>{
  aula 3 / 2,49
  try {
    const {clientId, salaoId, servicoId, colaboradorId} = req.body;

    //fazer verificação se ainda existe o horario disponivel 

    // recuperar o cliente
    const cliente = await Cliente.findById(clientId).select('nome endereco');

    // recuperar o salão 
    const salao = await Salao.findById(salaoId);

    // recuperar o serviço 
    const servico = await Servico.findById(servicoId).select('preco titulo');

    // recuperar o clolaborador 
    const colaborador = await Colaborador.findById(colaboradorId);

    //criar agendamento
    const agendamento = await new Agendamento({
      ... req.body,
      valor: servico.preco
    }).save();

    res.json({ error: false, agendamento })
  } catch (err) {
    res.json({ error: true, message: err.message});
  }
});

module.exports = router;