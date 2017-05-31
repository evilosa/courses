import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Containers
import Full from '../features/Full'

import Dashboard from '../features/Dashboard'
import Courses from '../features/Courses'
import Clients from '../features/Clients'

export default (
  <Route path="/" name="Home" component={Full}>
    <IndexRoute component={Dashboard}/>
    <Route path="dashboard" name="Dashboard" component={Dashboard}/>
    <Route path="courses" name="Courses" component={Courses}/>
    <Route path="clients" name="Clients">
      <IndexRoute component={Clients.components.List}/>
      <Route path="list" name="Clients list" component={Clients.components.List}/>
      <Route path="new" name="New client" component={Clients.components.New}/>
    </Route>
  </Route>
);
