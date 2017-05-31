import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import fetch from 'isomorphic-fetch';

import { ListItem } from './ListItem';

////////////////////////////////////////////////////////////////
// Component
////////////////////////////////////////////////////////////////

const propTypes = {
  actions: PropTypes.object.isRequired
};

export class ListComponent extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <i className="fa fa-align-justify"></i> Clients list
              <div className="card-actions">
                <Link to={'/clients/new'}><i className="icon-speedometer"></i> {I18n.t('common.add')}</Link>
              </div>
            </div>
            <div className="card-block">
              <table className="table table-striped">
                <thead>
                <tr>
                  <th>Username</th>
                  <th>Date registered</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {this.props.list.items.map(t => <ListItem key={t.id} item={t}/>)}
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

const fetchClientsAction = dispatch => {
  dispatch(actions.fetch());

  return fetch('/api/v1/clients')
    .then(response => response.json())
    .then(items => dispatch(actions.fetchSuccess(items)))
    .catch(error => dispatch(actions.fetchFailure(error)));
};

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => fetchClientsAction(dispatch)
  };
};

export const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComponent);