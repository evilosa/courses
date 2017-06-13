import clients from '../modules/clients';
import courses from '../modules/courses';

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  [clients.constants.NAME]: clients.reducer,
  [courses.constants.NAME]: courses.reducer
});

export default rootReducer;