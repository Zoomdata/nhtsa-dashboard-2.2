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
export const SET_HIDE_OVERLAY = 'SET_HIDE_OVERLAY';

export const REQUEST_MAKE_DATA = 'REQUEST_MAKE_DATA';
export const RECEIVE_MAKE_DATA = 'RECEIVE_MAKE_DATA';

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

export function setMake(make) {
    return {
        type: SET_MAKE,
        make
    }
}

export function setHideOverlay() {
    return {
        type: SET_HIDE_OVERLAY
    }
}



