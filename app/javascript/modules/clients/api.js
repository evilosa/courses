import fetch from 'isomorphic-fetch';
import { ROUTING_PATH_API } from './constants';

class Api {
  static getAll() {
    return fetch(ROUTING_PATH_API)
      .then(response => {
        let json = response.json();

        if (response.status === 200)
          return json;

        if (response.status === 422)
          return json.then(error => { throw error.errors; });

        throw response;
      })
      .catch(error => { throw error; });
  }

  static getById(id) {
    return fetch(`${ROUTING_PATH_API}/${id}`)
      .then(response => {
        let json = response.json();

        if (response.status === 200)
          return json;

        if (response.status === 422)
          return json.then(error => { throw error.errors; });

        throw response;
      })
      .catch(error => { throw error; });
  }

  static create(item) {
    return fetch(ROUTING_PATH_API, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({client: item})
    })
      .then(response => {
        let json = response.json();

        if (response.status === 200)
          return json;

        if (response.status === 422)
          return json.then(error => { throw error.errors; });

        throw response;
      })
      .catch(error => { throw error; });
  }

  static update(item) {
    return fetch(`${ROUTING_PATH_API}/${item.id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({client: item})
    })
      .then(response => {
        let json = response.json();

        if (response.status === 200)
          return json;

        if (response.status === 422)
          return json.then(error => { throw error.errors; });

        throw response;
      })
      .catch(error => { throw error; });
  }

  static remove(item) {
    return fetch(`${ROUTING_PATH_API}/${item.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => {
        let json = response.json();

        if (response.status === 200)
          return json;

        if (response.status === 422)
          return json.then(error => { throw error.errors; });

        throw response;
      })
      .catch(error => { throw error; });
  }
}

export default Api;