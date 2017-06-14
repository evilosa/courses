import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import routes from '../../routes/index';
import { Router } from 'react-router';
import ReduxToastr from 'react-redux-toastr';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history} routes={routes}/>
    <ReduxToastr
      position="top-right"
      progressBar/>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isPluginRequired
};

export default Root;
