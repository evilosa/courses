import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../api';
import { browserHistory } from 'react-router';
import Page from '../../common/Page';

// Page actions
const addNew = {title: I18n.t('common.add'), link: '/clients/new', icon: 'icon-speedometer' };
const pageActions = [ addNew ];

// Container
class ListPageContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      item: this.props.item,
      isEditing: false
    };
  }

  componentWillMount() {
    this.props.fetchClients();
  }

  render() {
    return (
      <Page header={I18n.t('client.header.list')} actions={pageActions}>
        <h1>List page container</h1>
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.clients.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchClients: () => fetchClients(dispatch),
    onDblClick: id => browserHistory.push(`/clients/${id}`)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPageContainer);

////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////

const fetchClients = dispatch => {
  dispatch(actions.fetchItems());

  api.getAll()
    .then(items => dispatch(actions.fetchItemsSuccess(items)))
    .catch(error => dispatch(actions.fetchItemsFailure(error)));
};