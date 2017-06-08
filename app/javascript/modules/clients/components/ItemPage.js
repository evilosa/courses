import React, { Component } from 'react';
import ItemForm from './ItemEdit';

class ItemPage extends Component {
  render() {
    const { item } = this.state;
    let itemPresentation = null;

    if (this.state.isEditing) {
      itemPresentation = <ItemEdit item={item} disabled={this.props.loading} onSave={this.props.saveItem} onChange={this.updateItemState}/>
    }
    else {
      itemPresentation = (
        <div>
          <h1>Detail view</h1>
          <button onClick={this.toggleEdit}>edit</button>
        </div>
      )
    }

    return (
      <div>
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify"></i> {I18n.t('client.header.list')}
            <div className="card-actions">
              <button onClick={this.toggleEdit}>{I18n.t('common.edit')}</button>
            </div>
          </div>
          {itemPresentation}
        </div>
      </div>
    );
  }
}

export default ItemPage;