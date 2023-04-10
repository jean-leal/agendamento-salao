const INITIAL_STATE = {
  agendamentos: []
};

function agendamento (state = INITIAL_STATE, aciton){
  switch (aciton.type) {
    case '@agendamento/ALL': {
      
    }

    default:
      return state;
  }
}

export default agendamento;