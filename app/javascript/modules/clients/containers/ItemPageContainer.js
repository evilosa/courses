import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as models from '../models';
import api from '../api';

import ItemEdit from '../components/ItemEdit';
import ItemDetails from '../components/ItemDetails';

const propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  updateClient: PropTypes.func.isRequired
};

class ItemPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localItem: { ...this.props.item },
      isEditing: this.props.isEditing
    };
    this.updateItemState = this.updateItemState.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchClient(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    // If component's props are updated with new item, change the internal state
    this.setState({localItem: nextProps.item});
  }

  toggleEdit(event) {
    event.preventDefault();
    this.setState({isEditing: !this.state.isEditing});
  }

  cancelEdit(event) {
    event.preventDefault();
    this.setState({isEditing: false, localItem: this.props.item});
  }

  updateItemState(event) {
    const field = event.target.name;
    const localItem = { ...this.state.localItem };
    localItem[field] = event.target.value;
    return this.setState({localItem: localItem});
  }

  saveItem(event) {
    event.preventDefault();
    if (this.props.updateClient(this.state.localItem))
      this.setState({isEditing: false});
  }

  render() {
    let ItemPresentation = <ItemDetails item={this.state.localItem} onEdit={this.toggleEdit}/>;

    if (this.state.isEditing)
      ItemPresentation = <ItemEdit item={this.state.localItem} disabled={this.props.loading} onSave={this.saveItem}
                                   onChange={this.updateItemState} onCancel={this.cancelEdit}/>;

    return (
      <div>
        {ItemPresentation}
      </div>
    );
  }
}

ItemPageContainer.propTypes = propTypes;

// State to props
const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.params.id,
    item: ownProps.route.path == 'new' ? new models.Client() :  { ...state.clients.activeItem.item},
    isEditing: ownProps.route.path == 'new',
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
        dispatch(actions.updateFailure(updatedItem.id, response.payload.response));
    })
    .catch(error => dispatch(actions.updateFailure(updatedItem.id, error.message)));
};
