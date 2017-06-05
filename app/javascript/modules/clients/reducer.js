import * as t from './actionTypes';
import { Client, State } from './models';

export default (state = State, action) => {
  switch (action.type) {
    case t.ADD:
      return { ...state };

    case t.FETCH_CLIENTS:
      return { ...state, error: null, list: { items: [], loading: true }};
    case t.FETCH_CLIENTS_SUCCESS:
      return { ...state, error: null, list: { items: action.items, loading: false }};
    case t.FETCH_CLIENTS_FAILURE:
      return { ...state, error: action.error };

    case t.FETCH_CLIENT:
      return { ...state, error: null, currentItem: { item: null, loading: true }};
    case t.FETCH_CLIENT_SUCCESS:
      return { ...state, error: null, currentItem: { item: action.item, loading: false }};
    case t.FETCH_CLIENT_FAILURE:
      return { ...state, error: action.error, currentItem: { item: null, loading: false }};

    default:
      return state;
  }
}