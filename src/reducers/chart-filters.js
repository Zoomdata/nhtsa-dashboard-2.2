import { SET_MAKE, SET_YEAR, SET_FILTERS, RESET_FILTERS, FilterStatuses } from '../actions';
const { FILTERS_APPLIED, FILTERS_RESET } = FilterStatuses;
const chartFilters = (state = {filterStatus: FILTERS_RESET}, action) => {
    switch (action.type) {
        case SET_MAKE:
            return {
                ...state, make: action.make
            }
        case SET_YEAR:
            return {
                ...state, year: action.year
            }
        case SET_FILTERS:
            return {
                ...state, filterStatus: action.status
            }
        case RESET_FILTERS:
            return {
                ...state, filterStatus: action.status
            }
        default:
            return state
    }
}

export default chartFilters;