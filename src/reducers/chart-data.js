import { REQUEST_MAKE_DATA, RECEIVE_MAKE_DATA, CHANGE_MAKE_DATA_QUERY } from '../actions';

const initialState = {
    makeData: {
        isFetching: false
    }
}
const data = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MAKE_DATA:
            return {
                ...state, makeData: {
                    source: action.source,
                    isFetching: true
                }
            }
        case RECEIVE_MAKE_DATA:
        case CHANGE_MAKE_DATA_QUERY:
            return Object.assign({}, state, {
                makeData: {
                    source: state.makeData.source,
                    isFetching: false,
                    data: action.data || state.makeData.data
                }
            });
        default:
            return state
    }
};

export default data;