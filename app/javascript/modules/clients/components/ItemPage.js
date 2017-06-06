import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as models from '../models';
import * as actions from '../actions';
import ItemForm from './ItemEdit';
import { Link } from 'react-router';

const propTypes = {
  item: PropTypes.object.isRequired
};

class Item extends Component {
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

  componentWillReceiveProps(nextProps) {
    // If component's props are updated with new item, change the internal state
    if (this.props.item.id != nextProps.item.id) {
      this.setState({item: nextProps.item})
    }
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
    this.props.actions.updateClient(this.state.item);
  }

  render() {
    const { item } = this.state;
    let itemPresentation = null;

    if (this.state.isEditing) {
      itemPresentation = <ItemForm item={this.state.item} onSave={this.saveItem} onChange={this.updateItemState}/>
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
              <Link to={'/clients/' + this.state.item.id + '/edit'}><i className="icon-speedometer"></i> {I18n.t('common.edit')}</Link>
            </div>
          </div>
          {itemPresentation}
        </div>
      </div>
    );
  }
}

Item.propTypes = propTypes;

function getClientById(items, id) {
  let item = items.find(item => item.id == id)
  return Object.assign({}, item)
}

const mapStateToProps = (state, ownProps) => {
  let item = new models.Client();

  const itemId = ownProps.params.id;

  if (itemId && state.clients.list.items.length > 0)
    item = getClientById(state.clients.list.items, ownProps.params.id);

  return {
    item: item
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    actions: {
      updateClient: (client) => actions.updateClient(dispatch, client)
    }
  });
};

export const ItemPage = connect(mapStateToProps, mapDispatchToProps)(Item);
