import React, { Component } from 'react';
import { Link } from 'react-router';

class List extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <i className="fa fa-align-justify"></i> Clients list
              <div className="card-actions">
                <Link to={'/clients/new'}><i className="icon-speedometer"></i> {I18n.t('common.edit')}</Link>
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
                <tr>
                  <td>Yiorgos Avraamu</td>
                  <td>2012/01/01</td>
                  <td>Member</td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>Avram Tarasios</td>
                  <td>2012/02/01</td>
                  <td>Staff</td>
                  <td>
                    <span className="badge badge-danger">Banned</span>
                  </td>
                </tr>
                <tr>
                  <td>Quintin Ed</td>
                  <td>2012/02/01</td>
                  <td>Admin</td>
                  <td>
                    <span className="badge badge-default">Inactive</span>
                  </td>
                </tr>
                <tr>
                  <td>Enéas Kwadwo</td>
                  <td>2012/03/01</td>
                  <td>Member</td>
                  <td>
                    <span className="badge badge-warning">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Agapetus Tadeáš</td>
                  <td>2012/01/21</td>
                  <td>Staff</td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
                </tr>
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

export default List;