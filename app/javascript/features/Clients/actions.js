import * as t from './actionTypes';
import api from './api';

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
  dispatch(fetch());

  return api.getAll()
    .then(items => dispatch(fetchSuccess(items)))
    .catch(error => dispatch(fetchFailure(error)));
};

export const fetch = () => ({
  type: t.FETCH_CLIENTS
});

export const fetchSuccess = items => ({
  type: t.FETCH_CLIENTS_SUCCESS,
  items: items
});

export const fetchFailure = error => ({
  type: t.FETCH_CLIENTS_FAILURE,
  error: error
});