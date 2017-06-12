import fetch from 'isomorphic-fetch';
import { ROUTING_PATH_API } from './constants';

class Api {
  static getAll() {
    return fetch(ROUTING_PATH_API)
      .then(response => response.json())
      .catch(error => { throw(error); });
  }

  static getById(id) {
    return fetch(`${ROUTING_PATH_API}/${id}`)
      .then(response => response.json())
      .catch(error => { throw(error); });
  }

  static update(item) {
    return fetch(`${ROUTING_PATH_API}/${item.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({client: item})
    })
      .then(response => response)
      .catch(error => { throw(error) });
  }
}

export default Api;