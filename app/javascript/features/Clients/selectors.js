import { createSelector } from 'reselect';
import { NAME } from './constants';
import { filterActive, filterInactive } from './model';

export const getAll = state => state[NAME];