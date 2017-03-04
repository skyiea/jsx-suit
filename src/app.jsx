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
import About from './pages/about/AboutContainer';
import PageNotFound from './pages/page-not-found/PageNotFoundContainer';

import './app.scss';

const store = createStore();

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="home" component={Home}/>
                <Route path="about" component={About}/>
                <IndexRoute component={Home}/>
                <Route path="*" component={PageNotFound}/>
            </Route>
        </Router>
    </Provider>
), document.querySelector('main#react-app'));