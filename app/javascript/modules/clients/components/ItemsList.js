import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import ListItem from './ListItem';


const ItemsList = (props) => {
  return (
    <Table  hover>
      <thead>
      <tr>
        <th>#</th>
        <th>{I18n.t('activerecord.attributes.client.title')}</th>
        <th>{I18n.t('activerecord.attributes.client.tax_number')}</th>
        <th>{I18n.t('activerecord.attributes.client.created_at')}</th>
        <th>{I18n.t('activerecord.attributes.client.status')}</th>
      </tr>
      </thead>
      <tbody>
        {props.items.map(t => <ListItem key={t.id} item={t} onDblClick={() => props.onOpenItem(t.id)}/>)}
      </tbody>
    </Table>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  onOpenItem: PropTypes.func.isRequired
};

export default ItemsList;

