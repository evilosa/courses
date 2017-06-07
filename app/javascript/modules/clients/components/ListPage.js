import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../api';
import { browserHistory } from 'react-router';

import ListItem from './ListItem';
import { Table } from 'reactstrap';

////////////////////////////////////////////////////////////////
// Component
////////////////////////////////////////////////////////////////

const propTypes = {
  list: PropTypes.object.isRequired
};

class List extends Component {
  componentDidMount() {
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
                <Link to={'/clients/new'}><i className="icon-speedometer"></i> {I18n.t('common.add')}</Link>
              </div>
            </div>
            <div className="card-block">
              <Table striped hover>
                <thead>
                <tr>
                  <th>#</th>
                  <th>{I18n.t('client.fields.title')}</th>
                  <th>{I18n.t('client.fields.tax_number')}</th>
                  <th>{I18n.t('client.fields.created_at')}</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {this.props.list.items.map(t => <ListItem key={t.id} item={t} onDblClick={this.props.onDblClick}/>)}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

List.propTypes = propTypes;

////////////////////////////////////////////////////////////////
// Container
////////////////////////////////////////////////////////////////

const fetchClients = dispatch => {
  dispatch(actions.fetchClients());

  api.getAll()
    .then(items => dispatch(actions.fetchClientsSuccess(items)))
    .catch(error => dispatch(actions.fetchClientFailure(error)));
};



const mapStateToProps = state => {
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

export const ListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);