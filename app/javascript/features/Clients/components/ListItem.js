import React, { Component } from 'react';

export class ListItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.title}</td>
        <td>{this.created_at}</td>
        <td>{this.tax_number}</td>
        <td>
          <span className="badge badge-success">Active</span>
        </td>
      </tr>
    );
  }
}