import * as t from './actionTypes';
import api from './api';

////////////////////////////////////////////////////////////////
// Load clients
////////////////////////////////////////////////////////////////

export const fetchClients = () => ({
  type: t.FETCH_ITEMS
});

export const fetchClientsSuccess = items => ({
  type: t.FETCH_ITEMS_SUCCESS,
  items: items
});

export const fetchClientsFailure = error => ({
  type: t.FETCH_ITEMS_FAILURE,
  error: error
});

////////////////////////////////////////////////////////////////
// Load client
////////////////////////////////////////////////////////////////

export const fetchClient = id => ({
  type: t.FETCH_ITEM,
  id: id
});

export const fetchClientSuccess = item => ({
  type: t.FETCH_ITEM_SUCCESS,
  item: item
});

export const fetchClientFailure = error => ({
  type: t.FETCH_ITEM_FAILURE,
  error: error
});

////////////////////////////////////////////////////////////////
// Update client
////////////////////////////////////////////////////////////////

export const updateClient = (dispatch, newValues) => {
  dispatch(update(newValues));

  return api.update(newValues)
    .then(response => dispatch(updateSuccess(response)))
    .catch(error => dispatch(updateFailure(item.id, error.message)));
};

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