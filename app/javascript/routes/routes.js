import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Layouts
import MainLayout from '../components/MainLayout';

// Pages
import Dashboard from '../modules/dashboard';
import Clients from '../modules/clients';
import Courses from '../modules/courses';
import Auth from '../modules/auth';

export default (
  <div>
    <Route path="/" name="Home" component={MainLayout}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
      <Route path="clients" name="Clients">
        <IndexRoute component={Clients.containers.ListPage}/>
        <Route path="new" name="New client" component={Clients.containers.ItemPage}/>
        <Route path=":id" name="Client detail" component={Clients.containers.ItemPage}/>
      </Route>
      <Route path="courses" name="Courses">
        <IndexRoute component={Courses.containers.ListPage}/>
        <Route path="new" name="New detail" component={Courses.containers.ItemPage}/>
        <Route path=":id" name="Course detail" component={Courses.containers.ItemPage}/>
      </Route>
    </Route>
    <Route path='sign_in' component={Auth.containers.LoginContainer}/>
  </div>
);
