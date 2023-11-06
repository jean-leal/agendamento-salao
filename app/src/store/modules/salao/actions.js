import types from './types';

export function getSalao(salaoId) {
  return {type: types.GET_SALAO, salaoId};
}

export function allSaloes() {
  return { type: types.ALL_SALOES}
}

export function setReducer(key, payload){
  return { type: types.SET_REDUCER, key, payload }
}

export function updateAllSaloes(saloes) {
  return {type: types.UPDATE_ALL_SALOES, saloes};
}

export function updateSalao(salao) {
  return {type: types.UPDATE_SALAO, salao};
}

export function allServicos() {
  return { type: types.ALL_SERVICOS }
}

export function updateServicos(servicos) {
  return { type: types.UPDATE_SERVICOS, servicos }
}

export function updateForm(form) {
  return { type: types.UPDATE_FORM, form }
}

export function updateAgendamento(agendamento) {
  return {type: types.UPDATE_AGENDAMENTO, agendamento}
}

export function updateAgenda(agenda) {
  return {type: types.UPDATE_AGENDA, agenda}
}

export function filterAgenda() {
  return{type: types.FILTER_AGENDA}
}

export function updateColaboradores(colaboradores) {
  return{type: types.UPDATE_COLABORADORES, colaboradores}
}

export function resetAgendamento() {
  return {type: types.RESET_AGENDAMENTO};
}

export function saveAgendamento() {
  return{type: types.SAVE_AGENDAMENTO}
}