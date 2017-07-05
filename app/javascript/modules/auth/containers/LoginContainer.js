import React, { Component } from 'react';
import Login from '../components/Login';

import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import * as actionCreators from '../actionCreators';

import auth_public from '../index';

class LoginContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.signIn = this.signIn.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.signUp = this.signUp.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }

  signIn(event) {
    event.preventDefault();

    this.props.actions.signIn();

    const { email, password } = this.state;

    auth_public.api.signIn(email, password)
      .then(data => {
        this.props.actions.signInSuccess(data.user, data.auth_token);
        browserHistory.goBack();
      })
      .catch(error => this.props.actions.signInFailure(error));
  }

  forgotPassword(event) {
    event.preventDefault();
  }

  signUp(event) {
    event.preventDefault();
    browserHistory.push('/sign_up');
  }

  changeEmail(event) {
    return this.setState({email: event.target.value});
  }

  changePassword(event) {
    return this.setState({password: event.target.value});
  }

  render() {
    return (
      <Login
        email={this.state.email}
        password={this.state.password}
        onEmailChanged={this.changeEmail}
        onPasswordChanged={this.changePassword}
        onSignIn={this.signIn}
        onForgotPassword={this.forgotPassword}
        onSignUp={this.signUp}/>
    );
  }
}

const mapStateToProps = state => ({
  loading: state[auth_public.constants.NAME].loading,
  user: state[auth_public.constants.NAME].user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
