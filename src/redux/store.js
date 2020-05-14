import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewwares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewwares));

export default store;
