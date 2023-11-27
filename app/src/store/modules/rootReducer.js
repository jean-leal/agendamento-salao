import { combineReducers } from 'redux';

import salao from './salao/reducer';
import app from './app/reducer';
import colaborador from './colaborador/reducer';

export default combineReducers ({
  salao,
  app,
  colaborador
})