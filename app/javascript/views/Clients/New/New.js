import React, { Component } from 'react';

class New extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <strong>Создание нового клиента</strong>
          </div>
          <form action="/api/v1/clients" method="post">
            <div className="card-block">
              <div className="row">
                <div className="col-sm-6 form-group">
                  <label for="title">Наименование</label>
                  <input type="text" id="title" name="title" className="form-control" placeholder="Enter client title.."/>
                </div>
                <div className="col-sm-6 from-group">
                  <label for="tax_number">ИНН</label>
                  <input type="text" id="tax_number" name="tax_number" className="form-control" placeholder="Enter tax number"/>
                </div>
              </div>
              <div className="form-group">
                <label for="full_name">Полное наименование</label>
                <input type="password" id="full_name" name="full_name" className="form-control" placeholder="Enter full name.."/>
              </div>
              <div className="form-group">
                <label for="description">Описание</label>
                <textarea id="description" name="description" rows="7" className="form-control" placeholder="Описание"></textarea>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Готово</button>&nbsp;
              <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Очистить</button>&nbsp;
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default New;