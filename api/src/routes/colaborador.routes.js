const express = require('express');
const router = express.Router();
const Colaborador = require('../models/colaborador');
const SalaoColaborador = require('../models/relationship/salaoColaborador');

router.post('/', async (req, res) =>{
  try{
    const {colaborador, salaoId} = req.body;
    let newColaborador = null;

    const existentColaborador = await Colaborador.findOne({
      $or: [
        {email: colaborador.email},
        {telefone: colaborador.telefone}
      ]
    })
    if (!existentColaborador){
      newColaborador = await new Colaborador({
        ...colaborador
      })
    }

    //relavionamento entre colaborador e salão
    const colaboradorId = existentColaborador
     ? existentColaborador._id
     : newColaborador._id; 

    //verifica se ja existe o relacionamento 
    const existeRelationship = await SalaoColaborador.findOne({
      salaoId,
      colaboradorId,
    });

    // se não esta vinculado 
    if(!existeRelationship) {
      await new SalaoColaborador ({
        salaoId, 
        colaboradorId,   
        status: colaborador.vinculo,     
      })
    }
    if (existeRelationship){
      const existeRelationship = await SalaoColaborador.findOne({
        salaoId,
        colaboradorId,
      });
    }
  } catch (err){
    re.json({ error: true, error: err.message})
  }
});

module.exports = router;