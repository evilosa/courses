import React, { PropTypes } from 'react';

const ListItem = ({item}) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.tax_number}</td>
      <td>{item.updated_at}</td>
      <td>
        <span className="badge badge-success">Active</span>
      </td>
      <td>Edit</td>
    </tr>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ListItem;