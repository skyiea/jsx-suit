// import STATUS from '../constants/requestStatus';
// import TYPES from '../actions/actionTypes';

import createReducer from '../utils/redux-helpers/createReducer';

function reducer(state, action) {
    const {
        type,
        // status,
        // payload
    } = action;

    switch (type) {
        default:
    }

    return state;
}

export default createReducer(reducer);