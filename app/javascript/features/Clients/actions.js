import * as t from './actionTypes';

export const add = (name, full_name, tax_number, description) => ({
  type: t.ADD,
  client: { name, full_name, tax_number, description }
});

export const edit = (new_name, new_full_name, new_tax_number, new_description) => ({
  type: t.EDIT,
  new_data: { new_name, new_full_name, new_tax_number, new_description }
});

export const fetch = () => ({
  type: t.FETCH
});

export const fetchSuccess = items => ({
  type: t.FETCH_SUCCESS,
  items: items
});

export const fetchFailure = error => ({
  type: t.FETCH_FAILURE,
  error: error
});