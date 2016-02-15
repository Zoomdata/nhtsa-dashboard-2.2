import * as actions from '../actions';

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
        case actions.SET_NHTSA_DIMENSIONS:
            return Object.assign({}, state, {
                nhtsaDimensions: {
                    height: action.height
                }
            })
        case actions.SET_DASHBOARD_PROPS:
            return Object.assign({}, state, {
                dashboardProps: {
                    width: action.width,
                    height: action.height,
                    offsetLeft: action.offsetLeft
                }
            });
        case actions.SET_MAKE_WRAPPER_PROPS:
            return Object.assign({}, state, {
                makeWrapperProps: {
                    width: action.width,
                    height: action.height,
                    offsetTop: action.offsetTop,
                    offsetLeft: action.offsetLeft
                }
            });
        case actions.SET_OVERLAY_SPLAT_PROPS:
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