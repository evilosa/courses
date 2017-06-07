import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../api';
import { browserHistory } from 'react-router';
import ListPage from '../components/ListPage';

////////////////////////////////////////////////////////////////////
// To props
////////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => {
  return {
    list: state.clients.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchClients: () => fetchClients(dispatch),
    onDblClick: id => browserHistory.push(`/clients/${id}`)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);

////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////

const fetchClients = dispatch => {
  dispatch(actions.fetchItems());

  api.getAll()
    .then(items => dispatch(actions.fetchItemsSuccess(items)))
    .catch(error => dispatch(actions.fetchItemsFailure(error)));
};