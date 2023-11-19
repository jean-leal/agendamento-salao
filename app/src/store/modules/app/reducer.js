import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  user: {},
  userForm: {
    tipo: "usuario"
  },
  form: {
    disabled: false,
    loading: false,
    saving: false,
  },
}

function app (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_REDUCER: {
      return produce(state, (draft) => {
        draft[action.key] = action.payload
    })}
    case types.SET_USER: {
      return produce(state, (draft) => {
        draft.userForm = {...state.userForm, ...action.payload }
    })}
    case types.SET_FORM: {
      return produce(state, (draft) => {
        draft.form = {...state.form, ...action.payload }
    })}
    case types.RESET: {
      return produce(state, (draft) => {
        draft[action.key] = INITIAL_STATE[action.key]
    })}    
    default:
      return state;
  }
}

export default app;