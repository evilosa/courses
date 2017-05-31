import * as t from './actionTypes';
import { Client, State } from './model';

export default (state = State, action) => {
  switch (action.type) {
    case t.ADD:
      return { ...state };
    case t.FETCH:
      return { ...state, items: [], error: null, isFetching: true };
    case t.FETCH_SUCCESS:
      return { ...state, items: action.items, error: null, isFetching: false };
    case t.FETCH_FAILURE:
      return { ...state, error: action.error.message, isFetching: false};

    default:
      return state;
  }
}