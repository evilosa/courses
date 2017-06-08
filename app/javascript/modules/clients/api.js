import fetch from 'isomorphic-fetch';

class Api {
  static getAll() {
    return fetch('/api/v1/clients')
      .then(response => response.json())
      .catch(error => { throw(error) });
  }

  static getById(id) {
    return fetch('/api/v1/clients/' + id)
      .then(response => response.json())
      .catch(error => { throw(error) });
  }

  static update(item) {
    return fetch(`/api/v1/clients/${item.id}`, {
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