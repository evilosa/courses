import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { ListItem } from './ListItem';

////////////////////////////////////////////////////////////////
// Component
////////////////////////////////////////////////////////////////

const propTypes = {
  actions: PropTypes.object.isRequired
};

export class ListComponent extends Component {
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
              <table className="table table-striped">
                <thead>
                <tr>
                  <th>#</th>
                  <th>{I18n.t('client.field.title')}</th>
                  <th>{I18n.t('client.field.tax_number')}</th>
                  <th>{I18n.t('client.field.created_at')}</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.props.list.map(t => <ListItem key={t.id} item={t}/>)}
                </tbody>
              </table>
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ListComponent.propTypes = propTypes;

////////////////////////////////////////////////////////////////
// Container
////////////////////////////////////////////////////////////////

const mapStateToProps = state => {
  return {
    list: state.clients.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadClients: () => actions.loadClients(dispatch)
  };
};

export const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComponent);