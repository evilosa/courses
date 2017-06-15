import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actionCreators';
import * as models from '../models';
import api from '../../../api';

import * as constants from '../constants';
import { toastr } from 'react-redux-toastr';

import common from '../../../components';

import ItemEdit from '../components/ItemEdit';
import ItemDetails from '../components/ItemDetails';


const catalogApi = new api.CatalogApi(constants.API_PATH, constants.CATALOG_PATH);
const { RemoveConfirm } = common;

class ItemPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      isEditing: this.props.isEditing,
      isRemoving: false
    };

    this.fetchItem = this.fetchItem.bind(this);
    this.createItem = this.createItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onSaveItem = this.onSaveItem.bind(this);
    this.onToggleEdit = this.onToggleEdit.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);

    this.onToggleRemove = this.onToggleRemove.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onCancelRemove = this.onCancelRemove.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;

    if (id)
      this.fetchItem(id);
  }

  componentWillReceiveProps(nextProps) {
    // If component's props are updated with new item, change the internal state
    this.setState({item: nextProps.item});
  }

  fetchItem(id) {
    const { actions } = this.props;

    actions.fetchItem(id);

    catalogApi.getById(id)
      .then(item => actions.fetchItemSuccess(item))
      .catch(errors => actions.fetchItemFailure(errors));
  }

  createItem(item) {
    const { actions } = this.props;

    actions.create(item);

    catalogApi.create(item)
      .then(newItem => {
        actions.createSuccess(newItem);
        this.setState({isEditing: false});
        toastr.success(I18n.t('common.headers.toastr.success'), I18n.t('common.messages.toast.success.created'));
        catalogApi.navigateToItem(newItem.id);
      })
      .catch(errors => {
        actions.createFailure(errors);
        errors.map(error => toastr.error(I18n.t('common.headers.toastr.error'), error));
      });
  }

  updateItem(item) {
    const { actions } = this.props;

    actions.update(item);

    catalogApi.update(item)
      .then(response => {
        actions.updateSuccess(response);
        toastr.success(I18n.t('common.headers.toastr.success'), I18n.t('common.messages.toast.success.updated'));
        this.setState({isEditing: false});
      })
      .catch(errors => {
        actions.updateFailure(item.id, errors);
        errors.map(error => toastr.error(I18n.t('common.headers.toastr.error'), error));
      });
  }

  removeItem(item) {
    const { actions } = this.props;

    actions.remove(item);

    catalogApi.remove(item)
      .then(response => {
        actions.removeSuccess(item);
        toastr.success(I18n.t('common.headers.toastr.success'), I18n.t('common.messages.toast.success.removed'));
        catalogApi.navigateToList();
      })
      .catch(errors => {
        actions.removeFailure(item.id, errors);
        errors.map(error => toastr.error(I18n.t('common.headers.toastr.error'), error));
      });
  };

  onToggleEdit(event) {
    event.preventDefault();
    this.setState({isEditing: !this.state.isEditing});
  }

  onCancelEdit(event) {
    event.preventDefault();
    const { item } = this.state;

    if (item.id === null)
      catalogApi.navigateToList();
    else
      this.setState({isEditing: false, item: this.props.item});
  }

  onFieldChange(event) {
    const field = event.target.name;
    const localItem = { ...this.state.item };
    localItem[field] = event.target.value;
    return this.setState({item: localItem});
  }

  onSaveItem(event) {
    event.preventDefault();

    if (this.props.id === undefined)
      this.createItem(this.state.item);
    else
      this.updateItem(this.state.item);
  }

  // Remove item
  onToggleRemove(event) {
    event.preventDefault();
    this.setState({isRemoving: !this.state.isRemoving});
  }

  onRemoveItem(event) {
    event.preventDefault();
    this.removeItem(this.state.item);
  }

  onCancelRemove(event) {
    if (event)
      event.preventDefault();
    this.setState({isRemoving: false});
  }

  render() {
    let ItemPresentation = <ItemDetails item={this.state.item} isLoading={this.props.isLoading} onEdit={this.onToggleEdit} onRemove={this.onToggleRemove}/>;

    if (this.state.isEditing)
      ItemPresentation = <ItemEdit item={this.state.item} disabled={this.props.isLoading} onSave={this.onSaveItem} onChange={this.onFieldChange} onCancel={this.onCancelEdit}/>;

    return (
      <div>
        {ItemPresentation}
        <RemoveConfirm isOpen={this.state.isRemoving}
                       header={I18n.t('clients.headers.remove')}
                       question={I18n.t('common.questions.remove',
                         { subject: 'client',
                           title: this.state.item.title
                         })}
                       onRemove={this.onRemoveItem}
                       onCancel={this.onCancelRemove}/>
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
    item: ownProps.route.path == 'new' ? new models.Client() :  state.clients.activeItem.item,
    isEditing: ownProps.route.path == 'new',
    isLoading: state.clients.activeItem.loading
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    actions: bindActionCreators(actionCreators, dispatch)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer);