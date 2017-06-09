import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Containers
import MainLayout from '../modules/common/MainLayout'

import Dashboard from '../modules/dashboard'
import Courses from '../modules/courses'
import Clients from '../modules/clients'

export default (
  <Route path="/" name="Home" component={MainLayout}>
    <IndexRoute component={Dashboard}/>
    <Route path="dashboard" name="Dashboard" component={Dashboard}/>
    <Route path="courses" name="Courses" component={Courses}/>
    <Route path="clients" name="Clients">
      <IndexRoute component={Clients.containers.ListPage}/>
      <Route path="new" name="New client" component={Clients.containers.ItemPage}/>
      <Route path=":id" name="Client detail" components={Clients.containers.ItemPage}/>
    </Route>
  </Route>
);
