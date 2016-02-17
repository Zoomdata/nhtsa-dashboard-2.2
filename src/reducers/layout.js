import * as actions from '../actions';

const initialState = {
    dashboardDimensions: {
        width: null,
        height: null,
        offsetLeft: null
    },
    makeWrapperDimensions: {
        width: null,
        height: null,
        offsetTop: null,
        offsetLeft: null
    },
    overlaySplatDimensions: {
        width: null
    }
};
const layout = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_DASHBOARD_DIMENSIONS:
            return Object.assign({}, state, {
                dashboardDimensions: {
                    width: action.width,
                    height: action.height,
                    offsetLeft: action.offsetLeft
                }
            });
        case actions.SET_MAKE_WRAPPER_DIMENSIONS:
            return Object.assign({}, state, {
                makeWrapperDimensions: {
                    width: action.width,
                    height: action.height,
                    offsetTop: action.offsetTop,
                    offsetLeft: action.offsetLeft
                }
            });
        case actions.SET_OVERLAY_SPLAT_DIMENSIONS:
            return Object.assign({}, state, {
                overlaySplatDimensions: {
                    width: action.width
                }
            });
        default:
            return state;
    }
};

export default layout;