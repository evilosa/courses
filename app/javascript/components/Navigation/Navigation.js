import React, { Component } from 'react';
import { Link } from 'react-router';
import clients from '../../modules/clients';
import courses from '../../modules/courses';

class Navigation extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link" activeClassName="active"><i className="icon-home"></i> Dashboard <span className="badge badge-info">NEW</span></Link>
            </li>
            <li className="nav-item">
              <Link to={ clients.constants.CATALOG_PATH } className="nav-link" activeClassName="active"><i className="icon-layers"></i> Clients</Link>
            </li>
            <li className="nav-item">
              <Link to={ courses.constants.CATALOG_PATH } className="nav-link" activeClassName="active"><i className="icon-graduation"></i> Courses</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
