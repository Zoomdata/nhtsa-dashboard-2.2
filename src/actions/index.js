export const SET_DASHBOARD_PROPS = 'SET_DASHBOARD_PROPS';
export const SET_MAKE_WRAPPER_PROPS = 'SET_MAKE_WRAPPER_PROPS';
export const SET_OVERLAY_SPLAT_PROPS = 'SET_OVERLAY_SPLAT_PROPS';

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

export const REQUEST_MAKE_DATA = 'REQUEST_MAKE_DATA';
export const RECEIVE_MAKE_DATA = 'RECEIVE_MAKE_DATA';
export const CHANGE_MAKE_DATA_QUERY = 'CHANGE_MAKE_DATA_QUERY';

export function setDashboardProps(width, height, offsetLeft) {
    return {
        type: SET_DASHBOARD_PROPS,
        width,
        height,
        offsetLeft
    }
}

export function setMakeWrapperProps(width, height, offsetTop, offsetLeft) {
    return {
        type: SET_MAKE_WRAPPER_PROPS,
        width,
        height,
        offsetTop,
        offsetLeft
    }
}

export function setOverlaySplatProps(offsetWidth, paddingLeft, paddingRight, borderLeft, borderRight) {
    return {
        type: SET_OVERLAY_SPLAT_PROPS,
        offsetWidth,
        paddingLeft,
        paddingRight,
        borderLeft,
        borderRight
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

export function changeMakeDataQuery() {
    return {
        type: CHANGE_MAKE_DATA_QUERY
    }
}
