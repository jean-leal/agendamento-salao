import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import moment from 'moment';

import api from "../../../services/api";
import consts from '../../../consts';
import types from './types';
import { updateSalao, updateServicos, updateAgenda, updateColaboradores, updateAgendamento } from './actions';
import util from '../../../util';

export function* getSalao(){
  try {
    const { data: res} = yield call(api.get, `/salao/${consts.salaoId}`)
    if (res.error) {
      alert(err.message)
      return false;
    }

    yield put(updateSalao(res.salao))
  } catch (err) {
    alert(err.message);
  }
}

export function* allServicos(){
  try {
    const { data: res} = yield call(api.get, `/servico/salao/${consts.salaoId}`)
    if (res.error) {
      alert(err.message)
      return false;
    }

    yield put(updateServicos(res.servicos))
  } catch (err) {
    alert(err.message);
  }
}

export function* filterAgenda(){
  try {
    const { agendamento } = yield select((state) => state.salao);

    const { data: res} = yield call(api.post, `/agendamento/dias-disponiveis/`, {
      ...agendamento,
      data: moment().format('YYYY-MM-DD')
    })
    if (res.error) {
      alert(error.message)
      return false;
    }

    const {
      horariosDisponiveis, 
      data,
      colaboradorId} = yield call(util.selectAgendamento, res.agenda)

    yield put(updateAgenda(res.agenda))
    yield put(updateColaboradores(res.colaboradores))
    yield put(updateAgendamento({
      data: moment(`${data}T${horariosDisponiveis[0][0]}`).format(),
      colaboradorId
    }))
    
  } catch (err) {
    alert(err.message);
  }
}

export default all([
  takeLatest(types.GET_SALAO, getSalao),
  takeLatest(types.ALL_SERVICOS, allServicos),
  takeLatest(types.FILTER_AGENDA, filterAgenda)
]);