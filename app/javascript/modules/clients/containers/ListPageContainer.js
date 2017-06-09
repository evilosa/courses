import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../api';
import { PageAction } from '../../../models/pageActions/pageActions';
import { browserHistory } from 'react-router';
import Page from '../../common/Page';
import ItemsList from '../components/ItemsList';

// Page actions
const addNew = new PageAction(I18n.t('common.add'), '/clients/new', 'icon-speedometer');
const pageActions = [ addNew ];

// Container
class ListPageContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(id) {
    browserHistory.push(`/clients/${id}`);
  }

  componentWillMount() {
    this.props.fetchClients();
  }

  render() {
    return (
      <Page header={I18n.t('client.header.list')} actions={pageActions}>
        <h1>List page container</h1>
        <ItemsList items={this.props.list.items} onDblClick={this.selectItem}/>
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