import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import ListItem from './ListItem';
import { Table } from 'reactstrap';

const propTypes = {
  list: PropTypes.object.isRequired
};

class ListPage extends Component {
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

ListPage.propTypes = propTypes;

export default ListPage;

