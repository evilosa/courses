import * as t from './actionTypes';
import api from './api';
import { browserHistory } from 'react-router';

export const add = (title, full_name, tax_number, description) => ({
  type: t.ADD,
  client: { title, full_name, tax_number, description }
});

export const edit = (new_title, new_full_name, new_tax_number, new_description) => ({
  type: t.EDIT,
  new_data: { new_title, new_full_name, new_tax_number, new_description }
});

////////////////////////////////////////////////////////////////
// Load clients
////////////////////////////////////////////////////////////////

export const loadClients = dispatch => {
  dispatch(fetchClients());

  return api.getAll()
    .then(items => dispatch(fetchClientsSuccess(items)))
    .catch(error => dispatch(fetchClientsFailure(error.message)));
};

export const fetchClients = () => ({
  type: t.FETCH_CLIENTS
});

export const fetchClientsSuccess = items => ({
  type: t.FETCH_CLIENTS_SUCCESS,
  items: items
});

export const fetchClientsFailure = error => ({
  type: t.FETCH_CLIENTS_FAILURE,
  error: error
});

////////////////////////////////////////////////////////////////
// Load client
////////////////////////////////////////////////////////////////

export const loadClient = (dispatch, id) => {
  browserHistory.push('/clients/' + id);

  dispatch(fetchClient(id));

  return api.getById(id)
    .then(item => dispatch(fetchClientSuccess(item)))
    .catch(error => dispatch(fetchClientFailure(error.message)));
};

export const fetchClient = id => ({
  type: t.FETCH_CLIENT,
  id: id
});

export const fetchClientSuccess = item => ({
  type: t.FETCH_CLIENT_SUCCESS,
  item: item
});

export const fetchClientFailure = error => ({
  type: t.FETCH_CLIENT_FAILURE,
  error: error
});

////////////////////////////////////////////////////////////////
// Update client
////////////////////////////////////////////////////////////////

export const updateClient = (dispatch, item) => {
  dispatch(update(item));

  return api.update(item)
    .then(result => dispatch(updateSuccess(result)))
    .catch(error => dispatch(updateFailure(error.message)));
};

export const update = client => ({
  type: t.UPDATE,
  client: client
});

export const updateSuccess = item => ({
  type: t.UPDATE_SUCCESS,
  item: item
});

export const updateFailure = error => ({
  type: t.UPDATE_FAILURE,
  error: error
});