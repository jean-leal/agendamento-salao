import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { updateServico, allServicos as allServicosAction, resetServico } from './actions';
import api from '../../../services/api';
import consts from '../../../consts';
import types from './types';

export function* allServicos() {
  
  const { form } = yield select((state) => state.servico)

  try {
    yield put(updateServico({ form: { ...form, filtering: true } }));
    const { data: res } = yield call(api.get, `/servico/salao/${consts.salaoId}`);

    yield put(updateServico({ form: { ...form, filtering: false } }));

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(updateServico({ servicos: res.servicos }));

  } catch (err) {
    yield put(updateServico({ form: { ...form, filtering: false } }));

    alert(err.message);
  }
}

export function* addServico() {

  const { form, servico, components, behavior } = yield select((state) => state.servico)

  try {
    yield put(updateServico({ form: { ...form, saving: true } }));
  
    let novoServico = ({...servico, salaoId : consts.salaoId})

    const {data: res} = yield call(
      api[behavior === 'create' ? "post" : "put"],
      behavior === 'create' ? `/servico` : `/servico/${servico._id}`,
      novoServico
    );
    
    yield put(updateServico({ form: { ...form, saving: false } }));

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(allServicosAction());
    yield put(updateServico({ components: { ...components, drawer: false } }));
    yield put(resetServico());

  } catch (err) {
    yield put(updateServico({ form: { ...form, saving: false } }));
    alert(err.message);
  }
}

export function* removeServico() {

  const { form, colaborador, components } = yield select((state) => state.colaborador)

  try {
    yield put(updateServico({ form: { ...form, saving: true } }));
    const { data: res } = yield call(
      api.delete, `/colaborador/vinculo/${colaborador.vinculoId}`);

    yield put(updateServico({
      form: { ...form, saving: false }
    }));

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(allServicosAction());
    yield put(updateServico({ components: { ...components, drawer: false, confirmDelete: false } }));
    //yield put(resetServico());

  } catch (err) {
    yield put(updateServico({ form: { ...form, saving: false } }));
    alert(err.message);
  }
}

export function* removeArquivo(){
console.log("Remove arquivo")
}
export default all([
  takeLatest(types.ALL_SERVICOS, allServicos),
  takeLatest(types.ADD_SERVICO, addServico),
  takeLatest(types.REMOVE_SERVICO, removeServico),
  takeLatest(types.REMOVE_ARQUIVO, removeArquivo)
]);