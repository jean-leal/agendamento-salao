const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database');

//middlewars
app.use(morgan('dev'));
app.use(express.json());

//rotas
app.use('/salao', require('./src/routes/salao.routes'));
app.use('/servico', require('./src/routes/servico.routes'));
app.use('/horario', require('./src/routes/horario.routes'));
app.use('/colaborador', require('./src/routes/colaborador.routes'));


//variables
app.set('port', 8000);

app.listen(app.get('port'), ()=>{
  console.log(`API Escutando na porta ${app.get('port')}`)
})

