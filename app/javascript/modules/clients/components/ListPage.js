import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ListItem from './ListItem';
import { Table } from 'reactstrap';

////////////////////////////////////////////////////////////////
// Component
////////////////////////////////////////////////////////////////

const propTypes = {
  items: PropTypes.array.isRequired
};

class List extends Component {
  componentDidMount() {
    this.props.loadClients();
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
                  <th>{I18n.t('client.field.title')}</th>
                  <th>{I18n.t('client.field.tax_number')}</th>
                  <th>{I18n.t('client.field.created_at')}</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {this.props.items.map(t => <ListItem key={t.id} item={t} onDblClick={this.props.onDblClick}/>)}
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

const mapStateToProps = state => {
  return {
    items: state.clients.list.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadClients: () => actions.loadClients(dispatch),
    onDblClick: (id) => actions.loadClient(dispatch, id)
  };
};

export const ListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);