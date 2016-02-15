import { combineReducers } from 'redux';
import layout from './layout';
import activeTab from './active-tab';
import hoodAction from './hood-action';
import aboutVisibility from './about-visibility';
import chartData from './chart-data';
import {responsiveStateReducer} from 'redux-responsive';

const rootReducer = combineReducers({
    browser: responsiveStateReducer,
    layout,
    activeTab,
    hoodAction,
    aboutVisibility,
    chartData
});

export default rootReducer;