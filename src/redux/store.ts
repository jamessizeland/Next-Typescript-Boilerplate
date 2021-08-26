import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger]; // add more middleware here to be applied sequentially

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
