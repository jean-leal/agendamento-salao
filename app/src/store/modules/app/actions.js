import types from "./types";

export function logionUser(){
  return { type: types.LOGIN_USER }
}

export function setReducer(payload, key){
  return { type: types.LOGIN_USER, payload, key }
}

export function setUser(payload){
  return { type: types.SET_USER, payload }
}

export function reset(key){
  return { type: types.RESET, key }
}