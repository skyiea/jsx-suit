import isPlainObject from 'lodash.isplainobject';

export default function (map) {
    let actionCreatorsMap = {};

    for (const key in map) {
        const value = map[key];

        if (typeof value === 'function') {
            actionCreatorsMap[key] = value;
        } else if (isPlainObject(value)) {
            actionCreatorsMap = {
                ...actionCreatorsMap,
                ...value
            };
        }
    }

    return function (dispatch) {
        const props = {};

        for (const actionCreatorName in actionCreatorsMap) {
            props[actionCreatorName] = function (...args) {
                return dispatch(actionCreatorsMap[actionCreatorName](...args));
            };
        }

        return props;
    };
}