import React, { Component } from 'react';
import ItemForm from './ItemEdit';

class ItemPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      item: this.props.item,
      isEditing: false
    };
    this.updateItemState = this.updateItemState.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchClient(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    // If component's props are updated with new item, change the internal state
    this.setState({item: nextProps.item})
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  updateItemState(event) {
    const field = event.target.name;
    const item = this.state.item;
    item[field] = event.target.value;
    return this.setState({item: item});
  }

  saveItem(event) {
    event.preventDefault();
    this.props.updateClient(this.state.item);
  }

  render() {
    const { item } = this.state;
    let itemPresentation = null;

    if (this.state.isEditing) {
      itemPresentation = <ItemForm item={item} disabled={this.props.loading} onSave={this.saveItem} onChange={this.updateItemState}/>
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