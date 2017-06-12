import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const ItemEdit = props => {
  const {item, onChange} = props;

  return (
      <div className="row">
        <div className="col-md-10">
          <h3>Редактирование клиента</h3>
          <hr/>
          <div className="row">
                <div className="form-group col-sm-6">
                  <label>{I18n.t('client.fields.title')}</label>
                  <Input name="title" value={item.title} onChange={onChange}/>
                </div>
                <div className="form-group col-sm-6">
                  <label>{I18n.t('client.fields.tax_number')}</label>
                  <Input name="tax_number" value={item.tax_number} onChange={onChange}/>
                </div>
              </div>
          <div className="row">
                <div className="form-group col-sm-12">
                  <label>{I18n.t('client.fields.full_name')}</label>
                  <Input name="full_name" value={item.full_name} onChange={onChange}/>
                </div>
              </div>
          <div className="row">
                <div className="form-group col-sm-12">
                  <label>{I18n.t('client.fields.description')}</label>
                  <Input type="textarea" rows="7" name="description" value={item.description} onChange={onChange}/>
                </div>
              </div>
        </div>
        <div className="col-md-2">
          <h3>Actions</h3>
          <hr/>
          <div className="row">
            <a href="" onClick={props.onSave}><i className="fa fa-save"></i> Save</a>
          </div>
          <div className="row">
            <a href="" onClick={props.onCancel}><i className="fa fa-ban"></i> Cancel</a>
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
