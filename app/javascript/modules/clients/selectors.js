import { createSelector } from 'reselect';
import { NAME } from './constants';
import { filterActive, filterInactive } from './models';

export const getAll = state => state[NAME];