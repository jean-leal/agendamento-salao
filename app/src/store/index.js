import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk'

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import Reactotron from '../config/reactotron';

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware, thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer, Reactotron.createEnhancer())

const store = createStore(
  rootReducer,
  undefined, 
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;