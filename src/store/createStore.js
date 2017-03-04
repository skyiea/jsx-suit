import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';
import initialState from './initialState';

const middlewares = [
    thunkMiddleware,
];

if (__ENV__ === 'dev') {
    middlewares.push(createLogger({
        actionTransformer: (action) => ({
            ...action,
            type: String(action.type)
        })
    }));
}

export default function () {
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}