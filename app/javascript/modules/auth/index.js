import Api from '../../api';
import * as actionCreators from './actionCreators';
import components from './components';
import containers from './containers';
import * as constants from './constants';
import * as models from './models';
import reducer from './reducer';

const api = new Api.AuthApi(constants);

export default { api, actionCreators, components, containers, constants, models, reducer };