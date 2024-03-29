import { createStore, applyMiddleware, composeWithDevTools, compose} from 'redux'; 
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware(thunk);

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  ? compose(applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
 