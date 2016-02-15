import { SET_DASHBOARD_PROPS, SET_MAKE_WRAPPER_PROPS, SET_OVERLAY_SPLAT_PROPS } from '../actions';

const initialState = {
    dashboardProps: {
        width: null,
        height: null,
        offsetLeft: null
    },
    makeWrapperProps: {
        width: null,
        height: null,
        offsetTop: null,
        offsetLeft: null
    },
    overlaySplatProps: {
        offsetWidth: null,
        paddingLeft: null,
        paddingRight: null,
        borderLeft: null,
        borderRight: null
    }
};
export default function layout(state = initialState, action) {
    switch (action.type) {
        case SET_DASHBOARD_PROPS:
            return Object.assign({}, state, {
                dashboardProps: {
                    width: action.width,
                    height: action.height,
                    offsetLeft: action.offsetLeft
                }
            });
        case SET_MAKE_WRAPPER_PROPS:
            return Object.assign({}, state, {
                makeWrapperProps: {
                    width: action.width,
                    height: action.height,
                    offsetTop: action.offsetTop,
                    offsetLeft: action.offsetLeft
                }
            });
        case SET_OVERLAY_SPLAT_PROPS:
            return Object.assign({}, state, {
                overlaySplatProps: {
                    offsetWidth: action.offsetWidth,
                    paddingLeft: action.paddingLeft,
                    paddingRight: action.paddingRight,
                    borderLeft: action.borderLeft,
                    borderRight: action.borderRight
                }
            });
        default:
            return state;
    }
}