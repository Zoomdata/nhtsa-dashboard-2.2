import { SET_HIDE_OVERLAY } from '../actions';

const hideOverlay = (state = false, action) => {
    switch (action.type) {
        case SET_HIDE_OVERLAY:
            return true;
        default: {
            return state;
        }
    }
};

export default hideOverlay;
