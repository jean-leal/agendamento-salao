const express = require('express');
const router = express.Router();
const moment = require('moment');
const util = require('../services/util');

const Colaborador = require('../models/colaborador');
const Cliente = require('../models/cliente');
const Salao = require('../models/salao');
const Servico = require('../models/servico');
const Agendamento = require('../models/agendamento');
const Horarios = require('../models/horario');

router.post('/', async (req, res) =>{

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

router.post('/filter', async (req, res)=>{
  try {
    const {periodo, salaoId} = req.body;

    const agendamentos = await Agendamento.find({
      salaoId,
      data:{
        $gte: moment(periodo.inicio).startOf('day'),
        $lte: moment(periodo.final).endOf('day')
      }
    })
    .populate([
      {path: 'servicoId', select: 'titulo duracao'},
      {path: 'colaboradorId', select: 'nome'},
      {path: 'clienteId', select: 'nome'}
    ])

    res.json({ error: false, agendamentos });

  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.post('/dias-disponiveis', async (req, res) => {
  try {
    
    const {data, salaoId, servicoId} = req.body;
    const servico = await Servico.findById(servicoId).select('duracao');
    const horarios = await Horarios.find({salaoId});

    let agenda = [];
    let lastDay = moment(data);
    
    // duração do serviço
    const servicoMinutos = util.hourToMinutes(moment(servico.duracao).format('HH:mm'));
    
    const servicoSlots = util.sliceMinutes(
      moment(servico.duracao),
      moment(servico.duracao).add(servicoMinutos, 'minutes'),
      util.SLOT_DURATION
    ).length

    // procure nos próximos 365 dias ate a agenda conter 7 dias disponiveis
    for (let i = 0; i <= 365 && agenda.length < 7; i++ ){
      const espacosValidos = horarios.filter(horario => {
        //verificar o dia da semana
        const diaSemanaDisponivel = horario.dias.includes(moment(lastDay).day()); //0 - 6

        //verificar se o servico esta disponivel no dia
        const servicoDisponivel = horario.especialidadesId.includes(servicoId);

        return diaSemanaDisponivel && servicoDisponivel
      });

      // todos os colaboradores disponiveis no dia e seus 
      
      if (espacosValidos.length > 0) {
        let todosHorariosDia = {};

        for(let espaco of espacosValidos) {
          for(let colaboradorId of espaco.colaboradorId){
            if (!todosHorariosDia[colaboradorId]) {
              todosHorariosDia[colaboradorId] = []
            }

            // pegar todos os horarios de espaços e jogar para dentro do colaborador 
            todosHorariosDia[colaboradorId] = [
              ...todosHorariosDia[colaboradorId],
              ...util.sliceMinutes(
                util.mergeDateTime(lastDay, espaco.inicio),
                util.mergeDateTime(lastDay, espaco.fim),
                util.SLOT_DURATION
              )
            ]
          }
        }
  
        agenda.push({
          [lastDay.format('YYYY-MM-DD')]: todosHorariosDia,
        });
      }
      aula 3 4:02
      lastDay = lastDay.add(1, 'day')
    }

    res.json({ error: false, agenda,  })

  }catch (err) {
    res.json({ error: true, message: err.message });
  }
})

module.exports = router;