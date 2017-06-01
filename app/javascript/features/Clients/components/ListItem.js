import React, { Component } from 'react';

export class ListItem extends Component {
  render() {
    const { item } = this.props;

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
  }
}