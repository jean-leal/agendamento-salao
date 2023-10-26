import types from "./types";

export function logionUser(){
  return { type: types.LOGIN_USER }
}

export function setReducer(payload, key){
  return { type: types.LOGIN_USER, payload, key }
}