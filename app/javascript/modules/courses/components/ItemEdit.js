import React from 'react';
import PropTypes from 'prop-types';
import common from '../../../components';

const { FormInput } = common;

const ItemEdit = ({item, isLoading, onChange, onSave, onCancel}) => {
  return (
    <div className="row">
      <div className="col-md-10">
        <h3>{I18n.t('clients.headers.edit')}</h3>
        <hr/>
        <FormInput name="title" title={I18n.t('clients.fields.title')} value={item.title}
                     onChange={onChange}/>
        <FormInput name="full_name" title={I18n.t('clients.fields.full_name')} value={item.full_name}
                   onChange={onChange}/>
        <FormInput name="description" title={I18n.t('clients.fields.description')} value={item.description}
                   onChange={onChange} type="textarea"/>
      </div>
      <div className="col-md-2">
        <h3>Actions</h3>
        <hr/>
        <div className="row">
          <a href="" onClick={onSave} disabled={isLoading}><i className="fa fa-save"></i> Save</a>
        </div>
        <div className="row">
          <a href="" onClick={onCancel}><i className="fa fa-ban"></i> Cancel</a>
        </div>
      </div>
    </div>
  );
};

ItemEdit.propTypes = {
  item: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ItemEdit;
