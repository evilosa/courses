import fetch from 'isomorphic-fetch';

class Api {
  static getAll() {
    return fetch('/api/v1/clients')
      .then(response => response.json())
      .catch(error => error);
  }
}

export default Api;