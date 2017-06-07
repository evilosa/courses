import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../api';
import { browserHistory } from 'react-router';
import ItemPage from '../components/ItemPage';

// State to props
const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.params.id,
    item: state.clients.activeItem.item,
    loading: state.clients.activeItem.loading
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchClient: (id) => fetchClient(dispatch, id),
    updateClient: (updatedItem) => updateClient(dispatch, updatedItem)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);

////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////


const fetchClient = (dispatch, id) => {
  dispatch(actions.fetchItem(id));

  api.getById(id)
    .then(item => dispatch(actions.fetchItemSuccess(item)))
    .catch(error => dispatch(actions.fetchItemFailure(error)));
};

const updateClient = (dispatch, updatedItem) => {
  dispatch(actions.update(updatedItem));

  return api.update(updatedItem)
    .then(response => {
      if (response && response.status == 204) {
        dispatch(actions.updateSuccess(updatedItem));
      }
      else
        dispatch(actions.updateFailure(updatedItem.id, result.payload.response));
    })
    .catch(error => dispatch(actions.updateFailure(updatedItem.id, error.message)));
};