import React from 'react';
import PropTypes from 'prop-types';

import common from '../../../components';

const { Spinner } = common;

const ItemDetails = ({item, isLoading, onEdit, onRemove}) => {

  return (
    <Spinner isLoading={isLoading}>
      <div className="row">
        <div className="col-md-10">
          <h3>{item.title}</h3>
          <hr/>
          <div className="row">
            <div className="col-md-2">
              <img src={item.logo} alt="logo" className="img-fluid"/>
            </div>
            <div className="col-md-8">
              <h4>{I18n.t('clients.fields.description')}</h4>
              <p>{item.description}</p>
              <h4>{I18n.t('common.headers.details')}</h4>

              <dl className="row">
                <dt className="col-sm-3">{I18n.t('clients.fields.tax_number')}</dt>
                <dd className="col-sm-9">{item.tax_number}</dd>

                <dt className="col-sm-3">{I18n.t('clients.fields.full_name')}</dt>
                <dd className="col-sm-9">{item.full_name}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <h3>{I18n.t('common.headers.actions')}</h3>
          <hr/>
          <div className="row">
            <a href="" onClick={onEdit}><i className="fa fa-edit"></i> {I18n.t('common.buttons.edit')}</a>
          </div>
          <div className="row">
            <a href="" onClick={onRemove}><i className="fa fa-remove"></i> {I18n.t('common.buttons.remove')}</a>
          </div>
        </div>
      </div>
    </Spinner>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default ItemDetails;
