import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import moment from 'moment';

import api from "../../../services/api";
import consts from '../../../consts';
import types from './types';
import { updateSalao, updateServicos, updateAgenda, updateColaboradores, updateAgendamento, updateForm, updateAllSaloes } from './actions';
import util from '../../../util';
import { replace } from '../../../services/navigation';

export function* allSaloes(){

  try {
    const { data: res} = yield call(api.get, `/salao`)
    if (res.error) {
      alert(res.message)
      return false;
    }

    yield put(updateAllSaloes(res.saloes))
  } catch (err) {
    alert(err.message);
  }
}

export function* getSalao(salao){
  try {
    const { data: res} = yield call(api.get, `/salao/${salao.salaoId}`);
    
    if (res.error) {
      alert(res.message)
      return false;
    }

    yield put(updateSalao(res.salao));
    yield put(updateAgendamento({ salaoId: res.salao._id }));
  } catch (err) {
    alert(err.message);
  }
}

export function* allServicos(){
  try {
    const { data: res} = yield call(api.get, `/servico/salao/${consts.salaoId}`)
    if (res.error) {
      alert(res.message)
      return false;
    }

    yield put(updateServicos(res.servicos))
  } catch (err) {
    alert(err.message);
  }
}

export function* filterAgenda(){
  try {
    const { agendamento, agenda} = yield select((state) => state.salao);


    const { data: res} = yield call(api.post, `/agendamento/dias-disponiveis/`, {
      ...agendamento,
      data: moment().format('YYYY-MM-DD')
    })
    if (res.error) {
      alert(res.message)
      return false;
    }

    yield put(updateAgenda(res.agenda));
    yield put(updateColaboradores(res.colaboradores));

    const {
      horariosDisponiveis, 
      data,
      colaboradorId} = yield call(util.selectAgendamento, res.agenda)

    console.tron.log(horariosDisponiveis, data, colaboradorId)
    yield put(updateAgendamento({
      data: moment(`${data}T${horariosDisponiveis[0][0]}`).format(),
      colaboradorId
    }))
    
  } catch (err) {
    alert(err.message);
  }
}

export function* saveAgendamento(){
  try {
    yield put(updateForm({agendamentoLoading: true}))

    const {agendamento} = yield select((state) => state.salao);

    const { data: res} = yield call(api.post, `/agendamento`, agendamento)
    if (res.error) {
      alert(res.message)
      return false;
    }

    yield put(updateForm({agendamentoLoading: false}))
    alert("agendado com sucesso!")
    replace('Home');
  } catch (err) {
    alert(err.message);
  }
}

export default all([
  takeLatest(types.GET_SALAO, getSalao),
  takeLatest(types.ALL_SERVICOS, allServicos),
  takeLatest(types.FILTER_AGENDA, filterAgenda),
  takeLatest(types.SAVE_AGENDAMENTO, saveAgendamento),
  takeLatest(types.ALL_SALOES, allSaloes)
]);