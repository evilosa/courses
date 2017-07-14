import React, { Component } from 'react';
import Login from '../components/Login';
import LoginPage from '../components/LoginPage';

import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { SubmissionError } from 'redux-form';

import * as actionCreators from '../actionCreators';
import Api from '../../../api';
import * as constants from '../constants';

class LoginContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.signIn = this.signIn.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.signUp = this.signUp.bind(this);

    this.auth_api = new Api.AuthApi(constants);
  }

  signIn(values) {

    this.props.actions.signIn();

    const { email, password } = values;

    return this.auth_api.signIn(email, password)
      .then(data => {
        this.props.actions.signInSuccess(data.user, data.auth_token);
        browserHistory.goBack();
      })
      .catch(errors => {
        this.props.actions.signInFailure(errors);

        throw new SubmissionError(errors);
      });
  }

  forgotPassword(event) {
    event.preventDefault();
  }

  signUp(event) {
    event.preventDefault();
    browserHistory.push('/sign_up');
  }

  render() {
    // return (
    //   <Login
    //     email={this.state.email}
    //     password={this.state.password}
    //     onEmailChanged={this.changeEmail}
    //     onPasswordChanged={this.changePassword}
    //     onSignIn={this.signIn}
    //     onForgotPassword={this.forgotPassword}
    //     onSignUp={this.signUp}/>
    // );
    return (
      <LoginPage signIn={this.signIn}/>
    )
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
