import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import routes from '../../routes/index';
import DevTools from '../DevTools/index';
import { Router } from 'react-router';
import ReduxToastr from 'react-redux-toastr';

const Root = ({store, history}) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes}/>
      <DevTools/>
      <ReduxToastr
        position="top-right"
        progressBar/>
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;