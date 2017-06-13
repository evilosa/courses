import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as models from '../models';
import api from '../api';
import { browserHistory } from 'react-router';

import common from '../../../components';

import ItemEdit from '../components/ItemEdit';
import ItemDetails from '../components/ItemDetails';

const { RemoveConfirm } = common;

class ItemPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      isEditing: this.props.isEditing,
      isRemoving: false
    };
    this.fieldChange = this.fieldChange.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);

    this.toggleRemove = this.toggleRemove.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.cancelRemove = this.cancelRemove.bind(this);
  }

  componentDidMount() {
    this.props.fetchClient(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    // If component's props are updated with new item, change the internal state
    this.setState({item: nextProps.item});
  }

  toggleEdit(event) {
    event.preventDefault();
    this.setState({isEditing: !this.state.isEditing});
  }

  cancelEdit(event) {
    event.preventDefault();
    this.setState({isEditing: false, item: this.props.item});
  }

  fieldChange(event) {
    const field = event.target.name;
    const localItem = { ...this.state.item };
    localItem[field] = event.target.value;
    return this.setState({item: localItem});
  }

  saveItem(event) {
    event.preventDefault();
    if (this.props.updateClient(this.state.item))
      this.setState({isEditing: false});
  }

  // Remove item
  toggleRemove(event) {
    event.preventDefault();
    this.setState({isRemoving: !this.state.isRemoving});
  }

  removeItem(event) {
    event.preventDefault();
    if (this.props.destroyClient(this.state.item))
      browserHistory.push('/admin/clients');
  }

  cancelRemove(event) {
    if (event)
      event.preventDefault();
    this.setState({isRemoving: false});
  }

  render() {
    let ItemPresentation = <ItemDetails item={this.state.item} isLoading={this.props.isLoading} onEdit={this.toggleEdit} onRemove={this.toggleRemove}/>;

    if (this.state.isEditing)
      ItemPresentation = <ItemEdit item={this.state.item} disabled={this.props.isLoading} onSave={this.saveItem} onChange={this.fieldChange} onCancel={this.cancelEdit}/>;

    return (
      <div>
        {ItemPresentation}
        <RemoveConfirm isOpen={this.state.isRemoving}
                       header={I18n.t('clients.headers.remove')}
                       question={I18n.t('common.questions.remove',
                         { subject: 'client',
                           title: this.state.item.title
                         })}
                       onRemove={this.removeItem}
                       onCancel={this.cancelRemove}/>
      </div>
    );
  }
}

ItemPageContainer.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  updateClient: PropTypes.func.isRequired
};

// State to props
const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.params.id,
    item: ownProps.route.path == 'new' ? new models.Client() :  state.clients.activeItem.item,
    isEditing: ownProps.route.path == 'new',
    isLoading: state.clients.activeItem.loading
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchClient: (id) => fetchClient(dispatch, id),
    updateClient: (updatedItem) => updateClient(dispatch, updatedItem),
    destroyClient: (item) => destroyClient(dispatch, item)
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

const destroyClient = (dispatch, item) => {
  dispatch(actions.destroy(item));

  return api.destroy(item)
    .then(response => {
      if (response && response.status == 204) {
        dispatch(actions.destroySuccess(item));
      }
      else
        dispatch(actions.destroyFailure(item.id, response.payload.response));
    })
    .catch(error => dispatch(actions.updateFailure(updatedItem.id, error.message)));
};