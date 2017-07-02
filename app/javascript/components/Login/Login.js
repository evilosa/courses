import React, { Component } from 'react';
import Utils from '../../modules/utils';

import { Link } from 'react-router';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.signIn = this.signIn.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.signUp = this.signUp.bind(this);
    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

    this.state = {
      login: '',
      password: ''
    };
  }

  componentDidMount() {
    //alert(Utils.getMetaContent('csrf-token'));
  }

  signIn(event) {
    event.preventDefault();
    fetch('/users/sign_in', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(
        {
          user: {
            email: this.state.login,
            password: this.state.password
          },
          authenticity_token: Utils.getMetaContent('csrf-token')
        })}
    )
      .then(success => alert(`Ok ${success}`))
      .catch(error => alert(error));
  }

  forgotPassword(event) {
    event.preventDefault();

  }

  signUp(event) {
    event.preventDefault();

  }

  onLoginChange(event) {
    return this.setState({login: event.target.value});
    // const field = event.target.name;
    // const localItem = { ...this.state.item };
    // localItem[field] = event.target.value;
    // return this.setState({item: localItem});
  }

  onPasswordChange(event) {
    return this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group mb-0">
              <div className="card p-2">
                <div className="card-block">
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <div className="input-group mb-1">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input type="text" className="form-control" placeholder="Username" onChange={this.onLoginChange}/>
                  </div>
                  <div className="input-group mb-2">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Password" onChange={this.onPasswordChange}/>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button type="button" className="btn btn-primary px-2" onClick={this.signIn}>Login</button>
                    </div>
                    <div className="col-6 text-right">
                      <button type="button" className="btn btn-link px-0" onClick={this.forgotPassword}>Forgot password?</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-inverse card-primary py-3 hidden-md-down" style={{ width: 44 + '%' }}>
                <div className="card-block text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button type="button" className="btn btn-primary active mt-1" onClick={this.signUp}>Register now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;