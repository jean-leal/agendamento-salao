import { applyMiddleware, compose} from 'redux';
import { legacy_createStore as createStore} from 'redux'


import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import Reactotron from '../config/reactotron';

const sagaMiddleware = createSagaMiddleware(thunk);

const store = createStore( rootReducer, compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()
  ));

sagaMiddleware.run(rootSaga);

export default store;