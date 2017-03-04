import 'babel-polyfill';
import 'babel-regenerator-runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
} from 'react-router';

import { Provider } from 'react-redux';

import createStore from './store/createStore';

import App from './components/app-root/AppContainer';
import Home from './pages/home/HomeContainer';

import './app.scss';

const store = createStore();

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>
), document.querySelector('main#react-app'));