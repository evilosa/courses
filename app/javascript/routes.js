import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
// import Simple from './containers/Simple/'

import Dashboard from './views/Dashboard/'
import Courses from './views/Courses'
import Clients from './views/Clients/'

export default (
  <Router history={browserHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
      <Route path="courses" name="Courses" component={Courses}/>
      <Route path="clients" name="Clients">
        <IndexRoute component={Clients.List}/>
        <Route path="list" name="Clients list" component={Clients.List}/>
        <Route path="new" name="New client" component={Clients.New}/>
      </Route>
      <Route path="clients" name="Clients" component={Clients}/>
    </Route>
  </Router>
);
