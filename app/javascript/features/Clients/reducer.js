import * as t from './actionTypes';
import { Client, State } from './model';

export default (state = State, action) => {
  switch (action.type) {
    case t.ADD:
      return { ...state };
    case t.FETCH:
      return { ...state, itemsList: { items: [], error: null, isFetching: true }};
    case t.FETCH_SUCCESS:
      return { ...state, itemsList: { items: action.items, error: null, isFetching: false }};
    case t.FETCH_FAILURE:
      return { ...state, itemsList: { items: state.itemsList.items, error: action.error.message, isFetching: false}};

    default:
      return state;
  }
}