import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import api from '../../../api';
import * as actionCreators from '../actionCreators';
import * as constants from '../constants';
import { toastr } from 'react-redux-toastr';

import ItemsList from '../components/ItemsList';

const catalogApi = new api.CatalogApi(constants);

// Container
class ListPageContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.fetchItems = this.fetchItems.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onOpenItem = this.onOpenItem.bind(this);
  }

  ////////////////////////////////////////////
  // Data manipulation

  componentWillMount() {
    this.fetchItems();
  }

  fetchItems() {
    const { actions } = this.props;

    actions.fetchItems();

    catalogApi.getAll()
      .then(items => actions.fetchItemsSuccess(items))
      .catch(errors => {
        actions.fetchItemsFailure(errors);
        errors.map(error => toastr.error(I18n.t('common.headers.toastr.error'), error));
      });
  }

  /////////////////////////////////////////////
  // User interaction events

  onAdd(event) {
    event.preventDefault();
    catalogApi.navigateToNew();
  }

  onOpenItem(id) {
    catalogApi.navigateToItem(id);
  }

  //////////////////////////////////////////////
  // Render

  render() {
    const { items } = this.props.list;

    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-11">
            <h3>{I18n.t('clients.headers.list')}</h3>
            <hr/>
            <ItemsList items={items} onOpenItem={this.onOpenItem}/>
          </div>
          <div className="col-md-1">
            <h3>{I18n.t('common.headers.actions')}</h3>
            <hr/>
            <div className="row justify-content-center">
              <a href="" onClick={this.onAdd}><i className="icon-plus"></i> {I18n.t('common.buttons.add')} </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state[constants.NAME].list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPageContainer);