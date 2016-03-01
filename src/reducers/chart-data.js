import * as actions from '../actions';

const initialState = {
    makeData: {
        isFetching: false
    },
    yearData: {
        isFetching: false
    },
    modelData: {
        isFetching: false
    },
    componentData: {
        isFetching: false
    },
    metricTotalsData: {
        isFetching: false
    },
    metricData: {
        isFetching: false
    }
}
const data = (state = initialState, action) => {
    switch (action.type) {
        case actions.REQUEST_MAKE_DATA:
            return {
                ...state, makeData: {
                    source: action.source,
                    isFetching: true
                }
            }
        case actions.RECEIVE_MAKE_DATA:
            return Object.assign({}, state, {
                makeData: {
                    source: state.makeData.source,
                    isFetching: false,
                    data: action.data || state.makeData.data
                }
            });
        case actions.REQUEST_YEAR_DATA:
            return {
                ...state, yearData: {
                    source: action.source,
                    isFetching: true
                }
            }
        case actions.RECEIVE_YEAR_DATA:
            return Object.assign({}, state, {
                yearData: {
                    source: state.yearData.source,
                    isFetching: false,
                    data: action.data || state.yearData.data
                }
            });
        case actions.REQUEST_MODEL_DATA:
            return {
                ...state, modelData: {
                    source: action.source,
                    isFetching: true
                }
            }
        case actions.RECEIVE_MODEL_DATA:
            return Object.assign({}, state, {
                modelData: {
                    source: state.modelData.source,
                    isFetching: false,
                    data: action.data || state.modelData.data
                }
            });
        case actions.REQUEST_COMPONENT_DATA:
            return {
                ...state, componentData: {
                    source: action.source,
                    isFetching: true
                }
            }
        case actions.RECEIVE_COMPONENT_DATA:
            return Object.assign({}, state, {
                componentData: {
                    source: state.componentData.source,
                    isFetching: false,
                    data: action.data || state.componentData.data
                }
            });
        case actions.REQUEST_METRIC_TOTALS_DATA:
            return {
                ...state, metricTotalsData: {
                    source: action.source,
                    isFetching: true
                }
            }
        case actions.RECEIVE_METRIC_TOTALS_DATA:
            return Object.assign({}, state, {
                metricTotalsData: {
                    source: state.metricTotalsData.source,
                    isFetching: false,
                    data: action.data || state.metricTotalsData.data
                }
            });
        case actions.REQUEST_METRIC_DATA:
            return {
                ...state, metricData: {
                    source: action.source,
                    isFetching: true
                }
            }
        case actions.RECEIVE_METRIC_DATA:
            return Object.assign({}, state, {
                metricData: {
                    source: state.metricData.source,
                    isFetching: false,
                    data: action.data || state.metricData.data
                }
            });
        default:
            return state
    }
};

export default data;