import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
} from 'react-router';

import Carcass from 'carcass/Carcass';
import Index from 'pages/index/Index';

import 'app.scss';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Carcass}>
            <IndexRoute component={Index}/>
        </Route>
    </Router>
), document.getElementById('react-app'));