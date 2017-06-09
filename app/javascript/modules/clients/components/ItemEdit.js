import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

class ItemEdit extends Component {
  render() {
    const {item, onChange} = this.props;

    return (
      <div className="animated fadeIn">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <i className="fa fa-align-justify"></i> {item.id !== 'new' ? I18n.t('client.header.edit') : I18n.t('client.header.new')}
            </div>
            <div className="card-block">
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
            <div className="card-footer">
              <button type="submit" className="btn btn-sm btn-primary" disabled={this.props.loading}
                      onClick={this.props.onSave}><i className="fa fa-save"></i> {I18n.t('common.save')}</button>&nbsp;
              <button type="reset" className="btn btn-sm btn-danger" onClick={this.toggleEdit}>
                <i className="fa fa-ban"></i> {I18n.t('common.cancel')}</button>&nbsp;
            </div>
          </div>
        </div>
      </div>
    );
  };
};

ItemEdit.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ItemEdit;
