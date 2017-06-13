import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import { Table } from 'reactstrap';

const ItemsList = (props) => {
  return (
    <Table  hover>
      <thead>
      <tr>
        <th>#</th>
        <th>{I18n.t('clients.fields.title')}</th>
        <th>{I18n.t('clients.fields.tax_number')}</th>
        <th>{I18n.t('clients.fields.created_at')}</th>
        <th>{I18n.t('clients.fields.status')}</th>
      </tr>
      </thead>
      <tbody>
        {props.items.map(t => <ListItem key={t.id} item={t} onDblClick={() => props.onDblClick(t.id)}/>)}
      </tbody>
    </Table>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  onDblClick: PropTypes.func.isRequired
};

export default ItemsList;

