import { SET_ACTIVE_TAB, ActiveTabs } from '../actions';
const { SHOW_SCATTERPLOT } = ActiveTabs;

const activeTab = (state = SHOW_SCATTERPLOT, action) => {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return action.tab
        default:
            return state
    }
};

export default activeTab;