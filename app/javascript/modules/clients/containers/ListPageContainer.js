import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../api';
import { browserHistory } from 'react-router';

import { ROUTING_PATH } from '../constants';

import { Link } from 'react-router';
import ItemsList from '../components/ItemsList';


// Container
class ListPageContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(id) {
    browserHistory.push(`${ROUTING_PATH}/${id}`);
  }

  componentWillMount() {
    this.props.fetchClients();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <i className="fa fa-align-justify"></i> {I18n.t('client.header.list')}
              <div className="card-actions">
                <Link to='/clients/new'><i className="icon-plus"></i> {I18n.t('common.add')} </Link>
              </div>
            </div>
            <div className="card-block">
              <ItemsList items={this.props.list.items} onDblClick={this.selectItem}/>
            </div>
          </div>
        </div>
      </div>
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
    onDblClick: id => browserHistory.push(`${ROUTING_PATH}/${id}`)
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