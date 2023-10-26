import { combineReducers } from 'redux';

import salao from '../modules/salao/reducer';
import app from './app/reducer';

export default combineReducers ({
  salao,
  app,
})