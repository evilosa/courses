import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../api';
import { browserHistory } from 'react-router';
import ItemEdit from '../components/ItemEdit';
import ItemDetails from '../components/ItemDetails';

class ItemPageContainer extends Component {
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
    let ItemPresentation = <ItemEdit item={this.props.item} disabled={this.props.loading} onSave={this.saveItem} onChange={this.updateItemState}/>

    if (this.state.isEditing)
      ItemPresentation = <ItemEdit item={this.props.item} disabled={this.props.loading} onSave={this.saveItem} onChange={this.updateItemState}/>

    return (
      {ItemPresentation}
    );
  }
}

// State to props
const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.params.id,
    item: state.clients.activeItem.item,
    loading: state.clients.activeItem.loading
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchClient: (id) => fetchClient(dispatch, id),
    updateClient: (updatedItem) => updateClient(dispatch, updatedItem)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer);

////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////


const fetchClient = (dispatch, id) => {
  dispatch(actions.fetchItem(id));

  api.getById(id)
    .then(item => dispatch(actions.fetchItemSuccess(item)))
    .catch(error => dispatch(actions.fetchItemFailure(error)));
};

const updateClient = (dispatch, updatedItem) => {
  dispatch(actions.update(updatedItem));

  return api.update(updatedItem)
    .then(response => {
      if (response && response.status == 204) {
        dispatch(actions.updateSuccess(updatedItem));
      }
      else
        dispatch(actions.updateFailure(updatedItem.id, result.payload.response));
    })
    .catch(error => dispatch(actions.updateFailure(updatedItem.id, error.message)));
};
