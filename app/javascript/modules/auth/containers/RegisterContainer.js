import React, { Component } from 'react';
import Register from '../components/Register';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';

import * as actionCreators from '../actionCreators';
import * as constants from '../constants';

class RegisterContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.signUp = this.signUp.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changePasswordConfirmation = this.changePasswordConfirmation.bind(this);

    this.state = {
      email: {
        value: '',
        validation: ''
      },
      password: {
        value: '',
        validation: ''
      },
      password_confirmation: {
        value: '',
        validation: ''
      }
    };
  }

  changeEmail(event) {
    return this.setState({email: { value: event.target.value}});
  }

  changePassword(event) {
    return this.setState({password: { value: event.target.value}});
  }

  changePasswordConfirmation(event) {
    return this.setState({password_confirmation: { value: event.target.value}});
  }

  signUp(event) {
    event.preventDefault();

    this.props.actions.signIn();

    fetch('/users.json', {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(
        {
          user: {
            email: this.state.email.value,
            password: this.state.password.value,
            password_confirmation: this.state.password_confirmation.value
          }
        })}
    )
      .then(response => {
        if (response.status === 200 || response.status === 422) {
          return response.json();
        }
        throw ('Sign up failed');
      })
      .then(result => {
        if (result.errors != null)
        {
          let errorsMap = new Map(Object.entries(result.errors));

          for (var [key, value] of errorsMap ) {
            this.setState({[key]: { validation: value }});
          }
        }
      })
      .catch(errors => {
        toastr.error(I18n.t('common.headers.toastr.error'), errors);
        this.props.actions.signInFailure(errors);
      });
  }

  render() {
    return (
      <Register
        email={this.state.email}
        password={this.state.password}
        password_confirmation={this.state.password_confirmation}
        onChangeEmail={this.changeEmail}
        onChangePassword={this.changePassword}
        onChangePasswordConfirmation={this.changePasswordConfirmation}
        onSignUp={this.signUp}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state[constants.NAME].loading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
