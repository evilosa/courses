import React, { Component } from 'react';

class LoginLayout extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        {this.props.children}
      </div>
    );
  }
}

export default LoginLayout;
