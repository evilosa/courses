import * as t from './actionTypes';
import { Client, State } from './models';

export default (state = State, action) => {
  switch (action.type) {
    case t.ADD:
      return { ...state };

    case t.FETCH_CLIENTS:
      return { ...state, items: [], error: null, isFetching: true };
    case t.FETCH_CLIENTS_SUCCESS:
      return { ...state, items: action.items, error: null, isFetching: false };
    case t.FETCH_CLIENTS_FAILURE:
      return { ...state, error: action.error.message, isFetching: false};

    case t.FETCH_CLIENT:
      return { ...state };

    default:
      return state;
  }
}