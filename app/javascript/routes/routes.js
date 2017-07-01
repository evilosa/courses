import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Layouts
import MainLayout from '../components/MainLayout';
import LoginLayout from '../components/LoginLayout';

// Users
import Login from '../components/Login';
import Register from '../components/Register';
import ResetPassword from '../components/ResetPassword';

// Pages
import Dashboard from '../modules/dashboard';
import Clients from '../modules/clients';
import Courses from '../modules/courses';

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
    <Route path='login' component={LoginLayout}>
      <Route path='sign_in' component={Login}/>
      <Route path='register' component={Register}/>
      <Route path='password/new' component={ResetPassword}/>
    </Route>
  </div>
);
