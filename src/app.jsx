import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
} from 'react-router';

import App from './components/app-root/App';
import Home from './pages/home/Home';

import 'app.scss';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
), document.getElementById('react-app'));