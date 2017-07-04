import React, { Component } from 'react';
import Login from '../components/Login';

import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import * as actionCreators from '../actionCreators';
import * as constants from '../constants';

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

  componentDidMount() {
    //alert(Utils.getMetaContent('csrf-token'));
  }

  signIn(event) {
    event.preventDefault();

    this.props.actions.signIn();

    fetch('/users/sign_in.json', {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(
        {
          user: {
            email: this.state.email,
            password: this.state.password
          }
        })}
    )
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw ('Authorize fail');
      })
      .then(result => {
        this.props.actions.signInSuccess(result.user, result.auth_token);
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
  loading: state[constants.NAME].loading,
  user: state[constants.NAME].user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
