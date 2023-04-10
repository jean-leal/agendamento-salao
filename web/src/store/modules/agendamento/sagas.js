import { all, takeLatest, call } from 'redux-saga/effects';
import api from '../../../services/api';
import consts from '../../../consts';

export function* filterAgendamento({ start, end }) {
  console.log('cheguei sagas')
  try {
    const res = yield call(api.post, '/agendamento/filter', {
      salaoId: consts.salaoId,
      periodo: {
      inicio: start,
      final: end,
      },
    });
    console.log(res.data)
  } catch (err) {
    alert(err.message);
  }
}
aula 4 1:55
export default all([takeLatest('@agendamento/FILTER', filterAgendamento )]);