import { takeLatest, all, call, put, select, take } from 'redux-saga/effects';
import types from './types';

export function* loginUser() {
  //LÓGICA DE LOGIN
}

export default all([
  takeLatest(types.LOGIN_USER, loginUser)
]);