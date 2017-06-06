import * as t from './actionTypes';
import { Client, State } from './models';

export default (state = State, action) => {
  switch (action.type) {

    // fetch items
    case t.FETCH_ITEMS:
      return { ...state, list: { items: [], error: null, loading: true }};
    case t.FETCH_ITEMS_SUCCESS:
      return { ...state, list: { items: action.items, error: null, loading: false }};
    case t.FETCH_ITEMS_FAILURE:
      return { ...state, list: { items: [], error: action.error, loading: false }};
    case t.RESET_ITEMS:
      return { ...state, list: { items: [], error: null, loading: false }};

    // fetch item
    case t.FETCH_ITEM:
      return { ...state, activeItem: { ...state.activeItem, loading: true}};
    case t.FETCH_ITEM_SUCCESS:
      return { ...state, activeItem: { item: action.item, error: null, loading: false }};
    case t.FETCH_ITEM_FAILURE:
      return { ...state, activeItem: { item: null, error: action.error, loading: false }};
    case t.RESET_ACTIVE_ITEM:
      return { ...state, activeItem: { item: null, error: null, loading: false }};

    // create item
    case t.CREATE:
      return { ...state, newItem: { ...state.newItem, loading: true }};
    case t.CREATE_SUCCESS:
      return { ...state, newItem: { item: action.item, error: null, loading: false }};
    case t.CREATE_FAILURE:
      return { ...state, newItem: { item: null, error: action.error, loading: false }};
    case t.RESET_CREATE:
      return { ...state, newItem: { item: new Client(), error: null, loading: false }};

    // validate item
    case t.VALIDATE:
      return { ...state, newItem: { ...state.newItem, error: null, loading: true }};
    case t.VALIDATE_SUCCESS:
      return { ...state, newItem: { ...state.newItem, error: null, loading: false }};
    case t.VALIDATE_FAILURE:
      return { ...state, newItem: { ...state.newItem, error: action.error, loading: false }};
    case t.RESET_VALIDATE:
      return { ...state, newItem: { ...state.newItem, error: null, loading: false }};

    // update item
    case t.UPDATE:
      return { ...state, editedItem: { ...state.editedItem, loading: true }};
    case t.UPDATE_SUCCESS:
      return { ...state, editedItem: { item: action.item, error: null, loading: false }};
    case t.UPDATE_FAILURE:
      return { ...state, editedItem: { ...state.editedItem, error: action.error, loading: false }};
    case t.RESET_UPDATE:
      return { ...state, editedItem: { item: null, error: null, loading: false }};



    // delete item
    case t.DELETE:
      return { ...state, deletedItem: { ...state.deletedItem, loading: true }};
    case t.DELETE_SUCCESS:
      return { ...state, deletedItem: { item: action.item, error: null, loading: false }};
    case t.DELETE_FAILURE:
      return { ...state, deletedItem: { item: null, error: action.error, loading: false }};
    case t.RESET_DELETED_ITEM:
      return { ...state, deletedItem: { item:null, error: null, loading: false }};

    default:
      return state;
  }
}