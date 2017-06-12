import React, { Component } from 'react';
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
        <div className="row">
          <div className="col-md-11">
            <h3>{I18n.t('clients.headers.list')}</h3>
            <hr/>
            <ItemsList items={this.props.list.items} onDblClick={this.selectItem}/>
          </div>
          <div className="col-md-1">
            <h3>{I18n.t('common.headers.actions')}</h3>
            <hr/>
            <div className="row">
              <Link to={`${ROUTING_PATH}/new`}><i className="icon-plus"></i> {I18n.t('common.buttons.add')} </Link>
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