const express = require('express');
const router = express.Router();
const Horario = require('../models/horario');


router.post('/', async (req, res) =>{
  try{
    const horario = await new Horario(req.body).save();
    res.json({ horario })
  } catch (err){
    re.json({ error: true, error: err.message})
  }
});

router.get('/salao/:salaoId', async(req, res) =>{
  try{
    const { salaoId } = req.params;
    const horarios = await Horario.find({ salaoId });
    res.json({ horarios })
  } catch (err){
    re.json({ error: true, error: err.message})
  }
});

router.put('/:horarioId', async(req, res) =>{
  try{
    const { horarioId } = req.params;
    const horario = req.body; 

    await Horario.findByIdAndUpdate( horarioId, horario );

    res.json({ error: false })
  } catch (err){
    res.json({ error: true, error: err.message})
  }
});

router.delete('/:horarioId', async(req, res) =>{
  try{
    const { horarioId } = req.params;  
    await Horario.findByIdAndDelete( horarioId );
    res.json({ error: false })
  } catch (err){
    res.json({ error: true, error: err.message})
  }
});
terminou  1:40:23 
module.exports = router;