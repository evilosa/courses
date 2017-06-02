import clients from '../modules/clients';

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  catalog: clients.reducer
});

export default rootReducer;