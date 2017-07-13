import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from 'validate.js';

const constraints = {
  email: { email: true },
  password: { length: {minimum: 2} }
};

const formValidator = values => (
  validate(values, constraints) || {}
);

let LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-muted">Sign In to your account</p>
      <div className="input-group mb-1">
        <span className="input-group-addon"><i className="icon-user"></i></span>
        <Field name="email" component="input" type="text" className="form-control" placeholder="Email"/>
      </div>
      <div className="input-group mb-2">
        <span className="input-group-addon"><i className="icon-lock"></i></span>
        <Field name="password" component="input" type="password" className="form-control" placeholder="Password"/>
      </div>
      <div className="row">
        <div className="col-6">
          <button type="button" className="btn btn-primary px-2" >Login</button>
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