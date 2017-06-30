import * as constants from './constants';

//////////////////////////////////////////////////////////////////////////////////
// Items list

export const FETCH_ITEMS = constants.NAME + '/FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = constants.NAME + '/FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = constants.NAME + '/FETCH_ITEMS_FAILURE';
export const RESET_ITEMS = constants.NAME + '/RESET_ITEMS';

//////////////////////////////////////////////////////////////////////////////////
// Item
export const RESET_ITEM_ACTION = constants.NAME + '/RESET_ITEM_ACTION';

// Create new item
export const CREATE = constants.NAME + '/CREATE';
export const CREATE_SUCCESS = constants.NAME + '/CREATE_SUCCESS';
export const CREATE_FAILURE = constants.NAME + '/CREATE_FAILURE';

// Validate item on the server
export const VALIDATE = constants.NAME + '/VALIDATE';
export const VALIDATE_SUCCESS = constants.NAME + '/VALIDATE_SUCCESS';
export const VALIDATE_FAILURE = constants.NAME + '/VALIDATE_FAILURE';

// Update item
export const UPDATE = constants.NAME + '/UPDATE';
export const UPDATE_SUCCESS = constants.NAME + '/UPDATE_SUCCESS';
export const UPDATE_FAILURE = constants.NAME + '/UPDATE_FAILURE';

// Fetch item
export const FETCH_ITEM = constants.NAME + '/FETCH_ITEM';
export const FETCH_ITEM_SUCCESS = constants.NAME + '/FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = constants.NAME + '/FETCH_ITEM_FAILURE';

// Remove item
export const REMOVE = constants.NAME + '/REMOVE';
export const REMOVE_SUCCESS = constants.NAME + '/REMOVE_SUCCESS';
export const REMOVE_FAILURE = constants.NAME + '/REMOVE_FAILURE';