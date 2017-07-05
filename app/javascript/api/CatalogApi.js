import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

class CatalogApi {

  constructor(constants, token) {
    this.model_name = constants.MODEL_NAME;
    this.api_path = constants.API_PATH;
    this.catalog_path = constants.CATALOG_PATH;
    this.token = token;

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
      body: JSON.stringify({[this.model_name]: item})
    });
  };

  update(item) {
    return this.doApiRequest(`${this.api_path}/${item.id}`, {
      method: 'PATCH',
      body: JSON.stringify({[this.model_name]: item})
    });
  };

  remove(item) {
    return this.doApiRequest(`${this.api_path}/${item.id}`, {
      method: 'DELETE'
    });
  };

  doApiRequest(path, params = {}) {
    Object.assign(params, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    });
    
    return fetch(path, params)
      .then(response => {
        let json = response.json();

        if (response.redirected)
          return browserHistory.push(response.url);

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