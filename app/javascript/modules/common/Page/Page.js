import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  header: PropTypes.string.isRequired,
  actions: PropTypes.array
};

const Page = ({header, children, actions}) => {
  return (
    <div className="animated fadeIn">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify"></i> {header}
            <div className="card-actions">
              {actions.map(action => <Link key={action.link} to={action.link}>{action.icon ? <i className={action.icon}></i> : ''} {action.title}</Link>)}
            </div>
          </div>
          <div className="card-block">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Page.propTypes = propTypes;

export default Page;