import clients from '../features/Clients';

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  [clients.constants.NAME]: clients.reducer
});

export default rootReducer;