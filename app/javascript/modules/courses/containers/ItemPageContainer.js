import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as models from '../models';
import api from '../api';
import { NAME, ROUTING_PATH } from '../constants';
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
    if (this.props.id)
      this.props.fetchItem(this.props.id);
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
    if (this.props.updateItem(this.state.item))
      this.setState({isEditing: false});
  }

  // Remove item
  toggleRemove(event) {
    event.preventDefault();
    this.setState({isRemoving: !this.state.isRemoving});
  }

  removeItem(event) {
    event.preventDefault();
    if (this.props.destroyItem(this.state.item))
      browserHistory.push(ROUTING_PATH);
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
  id: PropTypes.string,
  item: PropTypes.object.isRequired
};

// State to props
const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.params.id,
    item: ownProps.route.path == 'new' ? new models.Course() :  state[NAME].activeItem.item,
    isEditing: ownProps.route.path == 'new',
    isLoading: state[NAME].activeItem.loading
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchItem: (id) => fetchItem(dispatch, id),
    updateItem: (updatedItem) => updateItem(dispatch, updatedItem),
    destroyItem: (item) => destroyItem(dispatch, item)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer);

////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////


const fetchItem = (dispatch, id) => {
  dispatch(actions.fetchItem(id));

  api.getById(id)
    .then(item => dispatch(actions.fetchItemSuccess(item)))
    .catch(error => dispatch(actions.fetchItemFailure(error)));
};

const updateItem = (dispatch, item) => {
  dispatch(actions.update(item));

  return api.update(item)
    .then(response => {
      if (response && response.status == 204) {
        dispatch(actions.updateSuccess(item));
      }
      else
        dispatch(actions.updateFailure(item.id, response.payload.response));
    })
    .catch(error => dispatch(actions.updateFailure(item.id, error.message)));
};

const destroyItem = (dispatch, item) => {
  dispatch(actions.destroy(item));

  return api.destroy(item)
    .then(response => {
      if (response && response.status == 204) {
        dispatch(actions.destroySuccess(item));
      }
      else
        dispatch(actions.destroyFailure(item.id, response.payload.response));
    })
    .catch(error => dispatch(actions.destroyFailure(item.id, error.message)));
};