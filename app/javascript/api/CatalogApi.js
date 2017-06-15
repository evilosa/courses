import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

class CatalogApi {

  constructor(api_path, catalog_path) {
    this.api_path = api_path;
    this.catalog_path = catalog_path;

    this.doApiRequest = this.doApiRequest.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  // Navigation

  navigateToNew() {
    browserHistory.push(`${this.catalog_path}/new`);
  }

  navigateToList() {
    browserHistory.push(this.catalog_path);
  }

  navigateToItem(id) {
    browserHistory.push(`${this.catalog_path}/${id}`);
  }

  // Api

  getAll() {
    return this.doApiRequest(this.api_path);
  };

  getById(id) {
    return this.doApiRequest(`${this.api_path}/${id}`);
  };

  create(item) {
    return this.doApiRequest(this.api_path, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({client: item})
    });
  };

  update(item) {
    return this.doApiRequest(`${this.api_path}/${item.id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({client: item})
    });
  };

  remove(item) {
    return this.doApiRequest(`${this.api_path}/${item.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  };

  doApiRequest(path, params = null) {
    return fetch(path, params)
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

export default CatalogApi;