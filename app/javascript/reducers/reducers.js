import clients from '../modules/clients';

import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  toastr: toastrReducer,
  [clients.constants.NAME]: clients.reducer
});

export default rootReducer;