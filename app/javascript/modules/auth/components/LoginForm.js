import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from 'validate.js';

import Fields from '../../../components/Fields';

const { IconField } = Fields;

const constraints = {
  email: { email: true },
  password: { length: {minimum: 2} }
};

const formValidator = values => (
  validate(values, constraints) || {}
);

let LoginForm = (props) => {
  const { submitting, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(props.signIn)}>
      <p className="text-muted">Sign In to your account</p>
      <Field name="email" component={IconField} label="email"/>
      <Field name="password" component={IconField} type="password" label="password"/>

      <div className="row">
        <div className="col-6">
          <button type="submit" className="btn btn-primary px-2" disabled={submitting}>Login</button>
        </div>
        <div className="col-6 text-right">
          <button type="button" className="btn btn-link px-0" >Forgot password?</button>
        </div>
      </div>
    </form>
  )
};

LoginForm = reduxForm({
  form: 'login',
  validate: formValidator
})(LoginForm);

export default LoginForm;