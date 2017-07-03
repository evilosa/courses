import React, { Component } from 'react';

class ResetPassword extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mx-2">
              <div className="card-block p-2">
                <h1>Reset password</h1>
                <p className="text-muted">Enter your email to get reset instruction</p>

                <div className="input-group mb-1">
                  <span className="input-group-addon">@</span>
                  <input type="text" className="form-control" placeholder="Email"/>
                </div>

                <button type="button" className="btn btn-block btn-success">Send instruction</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;