import * as t from './actionTypes';
import { State } from './models';

export default (state = State, action) => {
  switch (action.type) {

    //////////////////////////////////////////////////////////////////////////////////
    // List actions

    case t.SIGN_IN:
      return { ...state, signedIn: false, user: null, token: null, loading: true };
    case t.SIGN_IN_SUCCESS:
      return { ...state, signedIn: true, user: action.user, token: action.token, loading: false };
    case t.SIGN_IN_FAILURE:
      return { ...state, signedIn: false, user: null, token: null, loading: false};

    default:
      return state;
  }
}