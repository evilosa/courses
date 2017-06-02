import React, { Component } from 'react';
import Header from '../Header/index';
import Sidebar from '../Sidebar/index';
import Aside from '../Aside/index';
import Footer from '../Footer/index';

import Breadcrumbs from 'react-breadcrumbs';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
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

export default Full;
