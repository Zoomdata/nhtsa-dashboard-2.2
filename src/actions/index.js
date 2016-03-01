export const SET_DASHBOARD_DIMENSIONS = 'SET_DASHBOARD_DIMENSIONS';
export const SET_MAKE_WRAPPER_DIMENSIONS = 'SET_MAKE_WRAPPER_DIMENSIONS';
export const SET_OVERLAY_SPLAT_DIMENSIONS = 'SET_OVERLAY_SPLAT_DIMENSIONS';

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const ActiveTabs = {
    SHOW_SCATTERPLOT: 'SHOW_SCATTERPLOT',
    SHOW_MAP: 'SHOW_MAP'
}

export const SET_HOOD_ACTION = 'SET_HOOD_ACTION';
export const HoodActions = {
    OPEN_HOOD: 'OPEN_HOOD',
    CLOSE_HOOD: 'CLOSE_HOOD'
}

export const SET_ABOUT_VISIBILITY_OPTION = 'SET_ABOUT_VISIBILITY__OPTION';
export const AboutVisibilityOptions = {
    SHOW_ABOUT: 'SHOW_ABOUT',
    CLOSE_ABOUT: 'CLOSE_ABOUT'
}

export const SET_MAKE = 'SET_MAKE';
export const SET_YEAR = 'SET_YEAR';
export const SET_MODEL = 'SET_MODEL';
export const SET_HIDE_OVERLAY = 'SET_HIDE_OVERLAY';

export const SET_FILTERS = 'SET_FILTERS';
export const RESET_FILTERS = 'RESET_FILTERS';
export const FilterStatuses = {
    FILTERS_APPLIED: 'FILTERS_APPLIED',
    FILTERS_RESET: 'FILTERS_RESET'
}

export const SET_ARROW_VISIBILITY_OPTION = 'SET_ARROW_VISIBILITY_OPTION';
export const ArrowVisibilityOptions = {
    SHOW_ARROW: 'SHOW_ARROW',
    HIDE_ARROW: 'HIDE_ARROW'
}

export const REQUEST_MAKE_DATA = 'REQUEST_MAKE_DATA';
export const RECEIVE_MAKE_DATA = 'RECEIVE_MAKE_DATA';

export const REQUEST_YEAR_DATA = 'REQUEST_YEAR_DATA';
export const RECEIVE_YEAR_DATA = 'RECEIVE_YEAR_DATA';

export const REQUEST_MODEL_DATA = 'REQUEST_MODEL_DATA';
export const RECEIVE_MODEL_DATA = 'RECEIVE_MODEL_DATA';
export const CHANGE_MODEL_DATA_QUERY = 'CHANGE_MODEL_DATA_QUERY';

export const REQUEST_COMPONENT_DATA = 'REQUEST_COMPONENT_DATA';
export const RECEIVE_COMPONENT_DATA = 'RECEIVE_COMPONENT_DATA';
export const CHANGE_COMPONENT_DATA_QUERY = 'CHANGE_COMPONENT_DATA_QUERY';

export const REQUEST_METRIC_TOTALS_DATA = 'REQUEST_METRIC_TOTALS_DATA';
export const RECEIVE_METRIC_TOTALS_DATA = 'RECEIVE_METRIC_TOTALS_DATA';

export const REQUEST_METRIC_DATA = 'REQUEST_METRIC_DATA';
export const RECEIVE_METRIC_DATA = 'RECEIVE_METRIC_DATA';
export const CHANGE_METRIC_DATA_QUERY = 'CHANGE_METRIC_DATA_QUERY';

export function setDashboardDimensions(width, height, offsetLeft) {
    return {
        type: SET_DASHBOARD_DIMENSIONS,
        width,
        height,
        offsetLeft
    }
}

export function setMakeWrapperDimensions(width, height, offsetTop, offsetLeft) {
    return {
        type: SET_MAKE_WRAPPER_DIMENSIONS,
        width,
        height,
        offsetTop,
        offsetLeft
    }
}

export function setOverlaySplatDimensions(width) {
    return {
        type: SET_OVERLAY_SPLAT_DIMENSIONS,
        width
    }
}

export function setActiveTab(tab) {
    return {
        type: SET_ACTIVE_TAB,
        tab
    }
}

export function setHoodAction(action) {
    return {
        type: SET_HOOD_ACTION,
        action
    }
}

export function setAboutVisibilityOption(option) {
    return {
        type: SET_ABOUT_VISIBILITY_OPTION,
        option
    }
}

export function setFilterStatus(status) {
    if (status === FilterStatuses.FILTERS_APPLIED) {
        return {
            type: SET_FILTERS,
            status
        }
    } else {
        return {
            type: RESET_FILTERS,
            status
        }
    }
}

export function setArrowVisibilityOption(option) {
    return {
        type: SET_ARROW_VISIBILITY_OPTION,
        option
    }
}

export function requestMakeData(source) {
    return {
        type: REQUEST_MAKE_DATA,
        source
    }
}

export function receiveMakeData(data) {
    return {
        type: RECEIVE_MAKE_DATA,
        data
    }
}

export function requestYearData(source) {
    return {
        type: REQUEST_YEAR_DATA,
        source
    }
}

export function receiveYearData(data) {
    return {
        type: RECEIVE_YEAR_DATA,
        data
    }
}

export function requestModelData(source) {
    return {
        type: REQUEST_MODEL_DATA,
        source
    }
}

export function receiveModelData(data) {
    return {
        type: RECEIVE_MODEL_DATA,
        data
    }
}

export function changeModelDataQuery() {
    return {
        type: CHANGE_MODEL_DATA_QUERY
    }
}

export function requestComponentData(source) {
    return {
        type: REQUEST_COMPONENT_DATA,
        source
    }
}

export function receiveComponentData(data) {
    return {
        type: RECEIVE_COMPONENT_DATA,
        data
    }
}

export function changeComponentDataQuery() {
    return {
        type: CHANGE_COMPONENT_DATA_QUERY
    }
}

export function requestMetricTotalsData(source) {
    return {
        type: REQUEST_METRIC_TOTALS_DATA,
        source
    }
}

export function receiveMetricTotalsData(data) {
    return {
        type: RECEIVE_METRIC_TOTALS_DATA,
        data
    }
}

export function requestMetricData(source) {
    return {
        type: REQUEST_METRIC_DATA,
        source
    }
}

export function receiveMetricData(data) {
    return {
        type: RECEIVE_METRIC_DATA,
        data
    }
}

export function changeMetricDataQuery() {
    return {
        type: CHANGE_METRIC_DATA_QUERY
    }
}

export function setMake(make) {
    return {
        type: SET_MAKE,
        make
    }
}

export function setYear(year) {
    return {
        type: SET_YEAR,
        year
    }
}

export function setModel(model) {
    return {
        type: SET_MODEL,
        model
    }
}

export function setHideOverlay() {
    return {
        type: SET_HIDE_OVERLAY
    }
}



