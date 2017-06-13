import * as t from './actionTypes';
import { State } from './models';

export default (state = State, action) => {
  switch (action.type) {

    //////////////////////////////////////////////////////////////////////////////////
    // List actions

    case t.FETCH_ITEMS:
      return { ...state, list: { items: [], error: null, loading: true }};
    case t.FETCH_ITEMS_SUCCESS:
      return { ...state, list: { items: action.items, error: null, loading: false }};
    case t.FETCH_ITEMS_FAILURE:
      return { ...state, list: { items: [], error: action.error, loading: false }};
    case t.RESET_ITEMS:
      return { ...state, list: { items: [], error: null, loading: false }};


    //////////////////////////////////////////////////////////////////////////////////
    // Item actions
    case t.RESET_ITEM_ACTION:
      return { ...state, activeItem: { ...state.activeItem, error: null, loading: false }};


    // fetch item
    case t.FETCH_ITEM:
      return { ...state, activeItem: { ...state.activeItem, deleted: false, loading: true}};
    case t.FETCH_ITEM_SUCCESS:
      return { ...state, activeItem: { ...state.activeItem, item: action.item, error: null, deleted: false, loading: false }};
    case t.FETCH_ITEM_FAILURE:
      return { ...state, activeItem: { ...state.activeItem,  error: action.error, deleted: false, loading: false }};


    // create item
    case t.CREATE:
      return { ...state, activeItem: { ...state.activeItem, error: null, edit: true, deleted: false, loading: true }};
    case t.CREATE_SUCCESS:
      return { ...state, activeItem: { item: action.item, error: null, edit: false, deleted: false, loading: false }};
    case t.CREATE_FAILURE:
      return { ...state, activeItem: { ...state.activeItem, error: action.error, edit: true, deleted: false, loading: false }};


    // validate item
    case t.VALIDATE:
      return { ...state, activeItem: { ...state.activeItem, error: null, loading: true }};
    case t.VALIDATE_SUCCESS:
      return { ...state, activeItem: { ...state.activeItem, error: null, loading: false }};
    case t.VALIDATE_FAILURE:
      return { ...state, activeItem: { ...state.activeItem, error: action.error, loading: false }};


    // update item
    case t.UPDATE:
      return { ...state, activeItem: { ...state.activeItem, error: null, deleted: false, loading: true }};
    case t.UPDATE_SUCCESS:
      return { ...state, activeItem: { item: action.item, error: null, deleted: false, loading: false }};
    case t.UPDATE_FAILURE:
      return { ...state, activeItem: { ...state.activeItem, error: action.error, deleted: false, loading: false }};


    // delete item
    case t.DESTROY:
      return { ...state, activeItem: { ...state.activeItem, error: null, edit: false, deleted: false, loading: true }};
    case t.DESTROY_SUCCESS:
      return { ...state, activeItem: { item: action.item, error: null, edit: false, deleted: true, loading: false }};
    case t.DESTROY_FAILURE:
      return { ...state, activeItem: { ...state.activeItem, error: action.error, edit: false, deleted: false, loading: false }};

    default:
      return state;
  }
}