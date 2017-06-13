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

export const create = item => ({
  type: t.CREATE,
  item: item
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
// Update client
////////////////////////////////////////////////////////////////

export const update = item => ({
  type: t.UPDATE
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

////////////////////////////////////////////////////////////////
// Delete client
////////////////////////////////////////////////////////////////

export const destroy = item => ({
  type: t.DESTROY
});

export const destroySuccess = item => ({
  type: t.DESTROY_SUCCESS,
  item: item
});

export const destroyFailure = (id, error) => ({
  type: t.DESTROY_FAILURE,
  id: id,
  error: error
});