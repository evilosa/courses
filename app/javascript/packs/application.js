/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from '../components/Root';
import configureStore from '../store';
import { persistStore } from 'redux-persist'
import localForage from 'localforage';

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// persistStore(store, {});

class AppEntry extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false }
  }

  componentWillMount() {
    persistStore(store, {storage: localForage, blacklist: ['routing']}, () => {
      this.setState({ rehydrated: true });
    })
  }

  render() {
    const { store, history } = this.props;
    if (!this.state.rehydrated) {
      return <div>Loading ...</div>
    }
    return (<Root store={store} history={history}/>);
  }
}

ReactDOM.render(<AppEntry store={store} history={history}/>, document.getElementById('root'));