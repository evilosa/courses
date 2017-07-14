import React from 'react';

import LoginForm from './LoginForm';

const LoginPage = (props) => (
    <div className="app flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group mb-0">
              <div className="card p-2">
                <div className="card-block">
                  <h1>Login</h1>
                  <LoginForm signIn={props.signIn}/>
                </div>
              </div>
              <div className="card card-inverse card-primary py-3 hidden-md-down" style={{ width: 44 + '%' }}>
                <div className="card-block text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button type="button" className="btn btn-primary active mt-1">Register now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default LoginPage;