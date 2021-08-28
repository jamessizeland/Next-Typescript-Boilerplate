import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import userReducer from './user/user.reducer';
// import errorReducer from './errors/errors.reducer';
// import busyReducer from './busy/busy.reducer';

// All reducers that we write will be funnelled through this reeducer
const rootReducer = combineReducers({
  user: userReducer,
  // errorLog: errorReducer,
  // busyState: busyReducer,
});

const middlewares = [logger]; // add more middleware here to be applied sequentially

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
