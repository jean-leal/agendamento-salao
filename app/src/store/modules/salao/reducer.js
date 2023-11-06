import types from './types';
import produce from 'immer';
import consts from '../../../consts';
import * as _ from 'lodash'

const INITIAL_STATE = {
  saloes: [],
  salao: {},
  servicos: [],
  agenda: [], 
  colaboradores: [],
  agendamento: {
    clienteId: null,
    salaoId: null,
    servicoId: null,
    colaboradorId: null,
    data:null
  },
  form: {
    inputFiltro: '',
    inputFiltroFoco: false,
    modalEspecialista: false,
    modalAgendamento: 0, 
    agendamentoLoading: false,
  },
};

function salao(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.SET_REDUCER: {
      return produce(state, (draft) => {
        draft[action.key] = action.payload
    })}
    case types.UPDATE_SALAO: {
      return produce(state, (draft) => {
        draft.salao = {...draft.salao, ...action.salao};
      })
    }
    case types.UPDATE_SERVICOS: {
      return produce(state, (draft) => {
        draft.servicos = action.servicos;
      })
    }
    case types.UPDATE_ALL_SALOES: {
      return produce(state, (draft) => {
        draft.saloes = [ ...action.saloes];
      })
    }
    case types.UPDATE_FORM: {
      return produce(state, (draft) => {
        draft.form = { ...state.form, ...action.form};
      })
    }
    case types.UPDATE_AGENDA: {
      return produce(state, (draft) => {
       draft.agenda = [...state.agenda, ...action.agenda];
      })
    }
    case types.UPDATE_AGENDAMENTO: {
      return produce(state, (draft) => {
        if (action.agendamento.servicoId) {
          draft.form.modalAgendamento = 2;
        }
        draft.agendamento = {...state.agendamento, ...action.agendamento};
      })
    }
    case types.UPDATE_COLABORADORES: {
      return produce(state, (draft) => {
        draft.colaboradores = _.uniq([
          ...state.colaboradores,
          ...action.colaboradores,
        ])
      })
    }
    case types.RESET_AGENDAMENTO: {
      return produce(state, (draft) => {
        draft.agenda = INITIAL_STATE.agenda;
        draft.colaboradores = INITIAL_STATE.colaboradores;
      });
    }
    default:
      return state;
  }
}

export default salao;



