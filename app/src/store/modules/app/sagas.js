import { takeLatest, all, call, put, select, take } from 'redux-saga/effects';
import types from './types';

export function* loginUser() {
  //LÓGICA DE LOGIN
}

export function* saveUser() {
  //LÓGICA DE LOGIN
}


export default all([
  takeLatest(types.LOGIN_USER, loginUser),
  takeLatest(types.SAVE_USER, saveUser)
]);