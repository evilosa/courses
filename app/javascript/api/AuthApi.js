import fetch from 'isomorphic-fetch';

class AuthApi {
  constructor(constants) {
    this.sign_in_path = constants.SIGN_IN_PATH;
  }

  signIn(email, password) {
    return fetch(this.sign_in_path, {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(
        {
          user: {
            email: email,
            password: password
          }
        })}
    )
      .then(response => {

        if (response.status === 200 || response.status === 401) {
          return response.json();
        }
        //throw ({ _error: 'Invalid user/password pair' });

        throw (response);
      })
      .catch(error => { throw error });
  }
}

export default AuthApi;