import React, { PropTypes } from 'react';

const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  password_confirmation: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangePasswordConfirmation: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired
};

const Register = (props) => (
  <div className="app flex-row align-items-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mx-2">
            <div className="card-block p-2">

              <h1>Register</h1>
              <p className="text-muted">Create your account</p>

              <div className="input-group mb-1">
                <span className="input-group-addon">@</span>
                <input type="text" className="form-control" placeholder="Email" value={props.email.value} onChange={props.onChangeEmail}/>
              </div>
              <p className="help-block small">{props.email.validation}</p>

              <div className="input-group mb-1">
                <span className="input-group-addon"><i className="icon-lock"></i></span>
                <input type="password" className="form-control" placeholder="Password" value={props.password.value} onChange={props.onChangePassword}/>
              </div>
              <p className="help-block small">{props.password.validation}</p>

              <div className="input-group mb-2">
                <span className="input-group-addon"><i className="icon-lock"></i></span>
                <input type="password" className="form-control" placeholder="Repeat password" value={props.password_confirmation.value} onChange={props.onChangePasswordConfirmation}/>
              </div>
              <p className="help-block small">{props.password_confirmation.validation}</p>

              <button type="button" className="btn btn-block btn-success" onClick={props.onSignUp}>Create Account</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

Register.propTypes = propTypes;

export default Register;