import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as models from '../models';
import api from '../api';
import { ROUTING_PATH } from '../constants';
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
    if (this.props.id == undefined)
      this.props.createItem(this.state.item)
        .then(this.setState({isEditing: false}));
    else
      this.props.updateItem(this.state.item)
        .then(this.setState({isEditing: false}));
  }

  // Remove item
  toggleRemove(event) {
    event.preventDefault();
    this.setState({isRemoving: !this.state.isRemoving});
  }

  removeItem(event) {
    event.preventDefault();
    if (this.props.removeItem(this.state.item))
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
  item: PropTypes.object.isRequired,
  fetchItem: PropTypes.func.isRequired,
  createItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
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
    fetchItem: (id) => fetchItem(dispatch, id),
    createItem: (item) => createItem(dispatch, item),
    updateItem: (item) => updateItem(dispatch, item),
    removeItem: (item) => removeItem(dispatch, item)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer);

////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////


const fetchItem = (dispatch, id) => {
  dispatch(actions.fetchItem(id));

  return api.getById(id)
    .then(item => dispatch(actions.fetchItemSuccess(item)))
    .catch(errors => dispatch(actions.fetchItemFailure(errors)));
};

const createItem = (dispatch, item) => {
  dispatch(actions.create(item));

  return api.create(item)
    .then(newItem => dispatch(actions.createSuccess(newItem)))
    .catch(errors => {
      dispatch(actions.createFailure(errors));
      throw errors;
    });
};

const updateItem = (dispatch, item) => {
  dispatch(actions.update(item));

  return api.update(item)
    .then(response => dispatch(actions.updateSuccess(item)))
    .catch(errors => {
      dispatch(actions.updateFailure(item.id, errors));
      throw errors;
    });
};

const removeItem = (dispatch, item) => {
  dispatch(actions.remove(item));

  return api.remove(item)
    .then(response => dispatch(actions.removeSuccess(item)))
    .catch(errors => dispatch(actions.removeFailure(item.id, errors)));
};