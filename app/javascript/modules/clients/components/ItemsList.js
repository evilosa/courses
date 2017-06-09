import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import { Table } from 'reactstrap';

const propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  onDblClick: PropTypes.func.isRequired
};

const ItemsList = (props) => {
  return (
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
      {props.items.map(t => <ListItem key={t.id} item={t} onDblClick={() => props.onDblClick(t.id)}/>)}
      </tbody>
    </Table>
  );
}

ItemsList.propTypes = propTypes;

export default ItemsList;

