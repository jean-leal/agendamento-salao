import {all} from 'redux-saga/effects';

import salao from './salao/sagas';
import app from './app/sagas';

export default function* rootSaga() {
  return yield all([salao, app]);
}