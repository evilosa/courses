import React, { PropTypes } from 'react';

const ListItem = ({item, onDblClick}) => {
  return (
    <tr onDoubleClick={onDblClick}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.tax_number}</td>
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