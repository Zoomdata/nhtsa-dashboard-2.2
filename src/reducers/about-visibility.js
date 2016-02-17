import { SET_ABOUT_VISIBILITY_OPTION, AboutVisibilityOptions } from '../actions';
const { CLOSE_ABOUT } = AboutVisibilityOptions;

const aboutVisibility = (state = CLOSE_ABOUT, action) => {
    switch (action.type) {
        case SET_ABOUT_VISIBILITY_OPTION:
            return action.option;
        default:
            return state
    }
};

export default aboutVisibility;