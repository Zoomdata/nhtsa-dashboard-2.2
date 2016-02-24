import { SET_ARROW_VISIBILITY_OPTION, ArrowVisibilityOptions } from '../actions';
const { SHOW_ARROW } = ArrowVisibilityOptions;

const arrowVisibility = (state = SHOW_ARROW, action) => {
    switch (action.type) {
        case SET_ARROW_VISIBILITY_OPTION:
            return action.option;
        default:
            return state
    }
};

export default arrowVisibility;