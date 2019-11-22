
import consts from '../redux.consts';

const initialState = {
    test: '12341234',
    isReady: false
};

export default function appReducer(state = initialState, { type, payload }) {
    switch (type) {
        case consts.TEST:
            return state;
        default:
            return state;
    }
};