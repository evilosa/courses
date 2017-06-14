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

export const fetchItemsFailure = errors => ({
  type: t.FETCH_ITEMS_FAILURE,
  errors: errors
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

export const fetchItemFailure = errors => ({
  type: t.FETCH_ITEM_FAILURE,
  errors: errors
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

export const createFailure = errors => ({
  type: t.CREATE_FAILURE,
  errors: errors
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

export const updateFailure = (id, errors) => ({
  type: t.UPDATE_FAILURE,
  id: id,
  errors: errors
});

////////////////////////////////////////////////////////////////
// Delete client
////////////////////////////////////////////////////////////////

export const remove = item => ({
  type: t.REMOVE
});

export const removeSuccess = item => ({
  type: t.REMOVE_SUCCESS,
  item: item
});

export const removeFailure = (id, errors) => ({
  type: t.REMOVE_FAILURE,
  id: id,
  errors: errors
});