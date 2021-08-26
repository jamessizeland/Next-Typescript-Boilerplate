// All reducers that we write will be funnelled through this reeducer

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import errorReducer from './errors/errors.reducer';
import busyReducer from './loading/loading.reducer';

export default combineReducers({
  user: userReducer,
  errorLog: errorReducer,
  busyState: busyReducer,
});
