import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object.isRequired
};

const ItemDetails = props => {
  const {item} = props;

  return (
    <div className="row">
      <div className="col-md-10">
        <h3>{item.title}</h3>
        <hr/>
        <div className="row">
          <div className="col-md-2">
            <img src={item.logo} alt="logo" className="img-fluid"/>
          </div>
          <div className="col-md-8">
            <h4>Description</h4>
            <p>{item.description}</p>
            <h4>Details</h4>

            <dl className="row">
              <dt className="col-sm-3">Tax number</dt>
              <dd className="col-sm-9">{item.tax_number}</dd>

              <dt className="col-sm-3">Full name</dt>
              <dd className="col-sm-9">{item.full_name}</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <h3>Actions</h3>
        <hr/>
        <div className="row">
          <a href="" onClick={props.onEdit}><i className="fa fa-edit"></i> Edit</a>
        </div>
        <div className="row">
          <a href="" ><i className="fa fa-remove"></i> Remove</a>
        </div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = propTypes;

export default ItemDetails;
