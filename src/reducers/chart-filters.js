import { SET_MAKE } from '../actions';

const chartFilters = (state = {}, action) => {
    switch (action.type) {
        case SET_MAKE:
            return {
                ...state, make: action.make
            }
        default:
            return state
    }
}

export default chartFilters;