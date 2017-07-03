import * as t from './actionTypes';

///////////////////////////////////////////////////////////////////////
// Sign in

export const signIn = () => ({
  type: t.SIGN_IN
});

export const signInSuccess = (user, token) => ({
  type: t.SIGN_IN_SUCCESS,
  user: user,
  token: token
});

export const signInFailure = (error) => ({
  type: t.SIGN_IN_FAILURE,
  error: error
});


/////////////////////////////////////////////////////////////////////////
// Reset password

export const resetPassword = () => ({
  type: t.RESET_PASSWORD
});

