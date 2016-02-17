import { SET_HOOD_ACTION, HoodActions } from '../actions';
const { CLOSE_HOOD } = HoodActions;

const hoodAction = (state = CLOSE_HOOD, action) => {
    switch (action.type) {
        case SET_HOOD_ACTION:
            return action.action
        default:
            return state
    }
};

export default hoodAction;