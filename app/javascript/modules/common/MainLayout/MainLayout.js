import React, { Component } from 'react';
import NavTop from '../NavTop/index';
import Navigation from '../Navigation/index';
import Aside from '../Aside/index';
import Footer from '../Footer/index';

import Breadcrumbs from 'react-breadcrumbs';

class MainLayout extends Component {
  render() {
    return (
      <div className="app">
        <NavTop />
        <div className="app-body">
          <Navigation {...this.props}/>
          <main className="main">
            <Breadcrumbs
              wrapperElement="ol"
              wrapperClass="breadcrumb"
              itemClass="breadcrumb-item"
              separator=""
              routes={this.props.routes}
              params={this.props.params}
            />
            <div className="container-fluid">
              {this.props.children}
            </div>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
