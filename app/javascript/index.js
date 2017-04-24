import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Router routes = {routes} history={hashHistory} />, document.getElementById('root'));
};
