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
        if (response.status === 200) {
          return response.json();
        }
        throw ('Invalid user/password pair');
      })
      .catch(error => { throw error });
  }
}

export default AuthApi;