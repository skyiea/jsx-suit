export default function (rootReducer, domainReducers, postTransform) {
    return function (state, action, rootState = state) {
        let newState = {
            ...state,
            ...rootReducer(state, action, rootState)
        };

        for (const domainKey in domainReducers) {
            newState = {
                ...newState,
                [ domainKey ]: domainReducers[domainKey](newState[domainKey], action, rootState)
            };
        }

        if (postTransform) {
            return postTransform(newState, state);
        }

        return newState;
    };
}