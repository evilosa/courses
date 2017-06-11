import * as t from './actionTypes';

////////////////////////////////////////////////////////////////
// Load items
////////////////////////////////////////////////////////////////

export const fetchItems = () => ({
  type: t.FETCH_ITEMS
});

export const fetchItemsSuccess = items => ({
  type: t.FETCH_ITEMS_SUCCESS,
  items: items
});

export const fetchItemsFailure = error => ({
  type: t.FETCH_ITEMS_FAILURE,
  error: error
});

////////////////////////////////////////////////////////////////
// Load client
////////////////////////////////////////////////////////////////

export const fetchItem = id => ({
  type: t.FETCH_ITEM,
  id: id
});

export const fetchItemSuccess = item => ({
  type: t.FETCH_ITEM_SUCCESS,
  item: item
});

export const fetchItemFailure = error => ({
  type: t.FETCH_ITEM_FAILURE,
  error: error
});

////////////////////////////////////////////////////////////////
// Create
////////////////////////////////////////////////////////////////

export const create = () => ({
  type: t.CREATE
});

export const createSuccess = item => ({
  type: t.CREATE_SUCCESS,
  item: item
});

export const createFailure = error => ({
  type: t.CREATE_FAILURE,
  error: error
});

////////////////////////////////////////////////////////////////
// Edit
////////////////////////////////////////////////////////////////

export const beginEdit = () => ({
  type: t.BEGIN_EDIT
});

export const toggleEdit = () => ({
  type: t.TOGGLE_EDIT
});

export const finishEdit = () => ({
  type: t.FINISH_EDIT
});

////////////////////////////////////////////////////////////////
// Update client
////////////////////////////////////////////////////////////////

export const update = item => ({
  type: t.UPDATE,
});

export const updateSuccess = item => ({
  type: t.UPDATE_SUCCESS,
  item: item
});

export const updateFailure = (id, error) => ({
  type: t.UPDATE_FAILURE,
  id: id,
  error: error
});