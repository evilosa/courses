import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({item, onDblClick}) => {
  return (
    <tr onDoubleClick={() => onDblClick(item.id)}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.client_id}</td>
      <td>{item.updated_at}</td>
      <td>
        <span className="badge badge-success">Active</span>
      </td>
    </tr>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onDblClick: PropTypes.func.isRequired
};

export default ListItem;