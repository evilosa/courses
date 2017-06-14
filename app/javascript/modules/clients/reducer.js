import * as t from './actionTypes';
import { State } from './models';

export default (state = State, action) => {
  switch (action.type) {

    //////////////////////////////////////////////////////////////////////////////////
    // List actions

    case t.FETCH_ITEMS:
      return { ...state, list: { items: [], errors: null, loading: true }};
    case t.FETCH_ITEMS_SUCCESS:
      return { ...state, list: { items: action.items, errors: null, loading: false }};
    case t.FETCH_ITEMS_FAILURE:
      return { ...state, list: { items: [], errors: action.error, loading: false }};
    case t.RESET_ITEMS:
      return { ...state, list: { items: [], errors: null, loading: false }};


    //////////////////////////////////////////////////////////////////////////////////
    // Item actions
    case t.RESET_ITEM_ACTION:
      return { ...state, activeItem: { ...state.activeItem, errors: null, loading: false }};


    // fetch item
    case t.FETCH_ITEM:
      return { ...state, activeItem: { ...state.activeItem, deleted: false, loading: true}};
    case t.FETCH_ITEM_SUCCESS:
      return { ...state, activeItem: { ...state.activeItem, item: action.item, errors: null, deleted: false, loading: false }};
    case t.FETCH_ITEM_FAILURE:
      return { ...state, activeItem: { ...state.activeItem,  errors: action.errors, deleted: false, loading: false }};


    // create item
    case t.CREATE:
      return { ...state, activeItem: { ...state.activeItem, errors: null, edit: true, deleted: false, loading: true }};
    case t.CREATE_SUCCESS:
      return { ...state, activeItem: { item: action.item, errors: null, edit: false, deleted: false, loading: false }};
    case t.CREATE_FAILURE:
      return { ...state, activeItem: { ...state.activeItem, errors: action.errors, edit: true, deleted: false, loading: false }};


    // validate item
    case t.VALIDATE:
      return { ...state, activeItem: { ...state.activeItem, errors: null, loading: true }};
    case t.VALIDATE_SUCCESS:
      return { ...state, activeItem: { ...state.activeItem, errors: null, loading: false }};
    case t.VALIDATE_FAILURE:
      return { ...state, activeItem: { ...state.activeItem, errors: action.errors, loading: false }};


    // update item
    case t.UPDATE:
      return { ...state, activeItem: { ...state.activeItem, errors: null, deleted: false, loading: true }};
    case t.UPDATE_SUCCESS:
      return { ...state, activeItem: { item: action.item, errors: null, deleted: false, loading: false }};
    case t.UPDATE_FAILURE:
      return { ...state, activeItem: { ...state.activeItem, errors: action.errors, deleted: false, loading: false }};


    // remove item
    case t.REMOVE:
      return { ...state, activeItem: { ...state.activeItem, errors: null, edit: false, deleted: false, loading: true }};
    case t.REMOVE_SUCCESS:
      return { ...state, activeItem: { item: action.item, errors: null, edit: false, deleted: true, loading: false }};
    case t.REMOVE_FAILURE:
      return { ...state, activeItem: { ...state.activeItem, errors: action.errors, edit: false, deleted: false, loading: false }};

    default:
      return state;
  }
}