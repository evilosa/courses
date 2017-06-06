import React, { Component, PropTypes } from 'react';
import { Input } from 'reactstrap';

class ItemForm extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        <form>
          <Input name="title" label="title" value={item.title} onChange={this.props.onChange}/>
          <Input type="submit" disabled={this.props.loading} className="btn btn-primary" onClick={this.props.onSave}/>
          <button onClick={this.toggleEdit}>{I18n.t('common.cancel')}</button>
        </form>
      </div>
    );
  };
};

ItemForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ItemForm;