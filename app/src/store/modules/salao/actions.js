import types from './types';

export function getSalao() {
  return {type: types.GET_SALAO};
}

export function updateSalao(salao) {
  return {type: types.UPDATE_SALAO, salao};
}

export function allServicos() {
  return { type: types.ALL_SERVICOS }
}

export function upadateServicos(servicos) {
  return { type: types.UPDATE_SERVICOS, servicos }
}