import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { updateHorario, allHorarios as allHorariosAction, resetHorario } from './actions';
import api from '../../../services/api';
import consts from '../../../consts';
import types from './types';

export function* allHorarios() {
  
  const { form } = yield select((state) => state.horario)

  try {
    yield put(updateHorario({ form: { ...form, filtering: true } }));
    const { data: res } = yield call(api.get, `/horario/salao/${consts.salaoId}`);
    
    yield put(updateHorario({ form: { ...form, filtering: false } }));

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(updateHorario({ horarios: res.horarios }));

  } catch (err) {
    yield put(updateHorario({ form: { ...form, filtering: false } }));

    alert(err.message);
  }
}

export function* filterColaboradores() {

  const { form, colaborador } = yield select((state) => state.colaborador)

  try {
    yield put(updateHorario({ form: { ...form, filtering: true } }));
    const { data: res } = yield call(
      api.post, `/colaborador/filter`, {
      filters: {
        email: colaborador.email,
        status: 'A',
      }
    }
    );

    yield put(updateHorario({ form: { ...form, filtering: false } }));

    if (res.error) {
      alert(res.message);
      return false;
    }

    if (res.colaboradores.length > 0) {
      yield put(updateHorario({
        colaborador: res.colaboradores[0],
        form: { ...form, filtering: false, disabled: true }
      }
      ));

    } else {
      yield put(updateHorario({ form: { ...form, disabled: false } }));
    }

  } catch (err) {
    yield put(updateHorario({ form: { ...form, filtering: false } }));
    alert(err.message);
  }
}

export function* unlinkColaborador() {

  const { form, colaborador, components } = yield select((state) => state.colaborador)

  try {
    yield put(updateHorario({ form: { ...form, saving: true } }));
    const { data: res } = yield call(
      api.delete, `/colaborador/vinculo/${colaborador.vinculoId}`);

    yield put(updateHorario({
      form: { ...form, saving: false }
    }));

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(allHorariosAction());
    yield put(updateHorario({ components: { ...components, drawer: false, confirmDelete: false } }));
    yield put(resetHorario());

  } catch (err) {
    yield put(updateHorario({ form: { ...form, saving: false } }));
    alert(err.message);
  }
}

export function* addHorario() {

  const { form, horario, components, behavior } = yield select((state) => state.horario)

  try {
    yield put(updateHorario({ form: { ...form, saving: true } }));
    let res = {};
    if (behavior === "create"){
      const response = yield call(
        api.post, `/horario`, {
        ...horario, 
        salaoId: consts.salaoId
      });
      res = response.data;
    } else {
      const response = yield call(
        api.put, `/horario/${horario._id}`, horario);
      res = response.data;
    }
    

    yield put(updateHorario({ form: { ...form, saving: false } }));

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(allHorariosAction());
    yield put(updateHorario({ components: { ...components, drawer: false } }));
    yield put(resetHorario());

  } catch (err) {
    yield put(updateHorario({ form: { ...form, saving: false } }));
    alert(err.message);
  }
}

export function* allServicos() {
  const { form } = yield select((state) => state.horario)
  
  try {
    yield put(updateHorario({ form: { ...form, filtering: true } }));
    const { data: res } = yield call(api.get, `/salao/servicos/${consts.salaoId}`);
   
    yield put(updateHorario({ form: { ...form, filtering: false } }));
  
    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(updateHorario({ servicos: res.servicos }));
    
  } catch (err) {
    yield put(updateHorario({ form: { ...form, filtering: false } }));
    alert(err.message);
  }
}

export default all([
  takeLatest(types.ALL_HORARIOS, allHorarios),
  takeLatest(types.ALL_SERVICOS, allServicos),
  takeLatest(types.ADD_HORARIO, addHorario),
 /* takeLatest(types.FILTER_COLABORADOR, filterColaboradores),
 
  takeLatest(types.UNLINK_COLABORADOR, unlinkColaborador),
  */
]);