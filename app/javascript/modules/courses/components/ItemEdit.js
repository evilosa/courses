import React from 'react';
import PropTypes from 'prop-types';
import common from '../../../components';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

const { FormInput } = common;

const ItemEdit = ({item, isLoading, searchClients, onClientSelect, onChange, onSave, onCancel}) => {
  return (
    <div className="row">
      <div className="col-md-10">
        <h3>{I18n.t('courses.headers.edit')}</h3>
        <hr/>
        <div className="row">
          <FormInput name="title" classNames='col-sm-6' value={item.title} onChange={onChange} ownRow={false}
                     title={I18n.t('activerecord.attributes.course.title')}/>
          <div className="form-group col-sm-6">
            <label>{I18n.t('activerecord.attributes.course.client')}</label>
            <Select.Async name="client_id" value={item.client_id} onChange={onClientSelect} loadOptions={searchClients}/>
          </div>
        </div>
        <FormInput name="full_name" value={item.full_name} onChange={onChange}
                   title={I18n.t('activerecord.attributes.course.full_name')}/>
        <FormInput name="description" value={item.description} onChange={onChange} type="textarea"
                   title={I18n.t('activerecord.attributes.course.description')}/>
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
  searchClients: PropTypes.func.isRequired,
  onClientSelect: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ItemEdit;
