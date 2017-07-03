import clients from '../modules/clients';
import courses from '../modules/courses';
import auth from '../modules/auth';

import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  toastr: toastrReducer,
  [auth.constants.NAME]: auth.reducer,
  [clients.constants.NAME]: clients.reducer,
  [courses.constants.NAME]: courses.reducer
});

export default rootReducer;