import { combineReducers } from 'redux';
import layout from './layout';
import activeTab from './active-tab';
import hoodAction from './hood-action';
import aboutVisibility from './about-visibility';
import arrowVisibility from './arrow-visibility';
import hideOverlay from './hide-overlay';
import chartData from './chart-data';
import chartFilters from './chart-filters';
import {responsiveStateReducer} from 'redux-responsive';

const rootReducer = combineReducers({
    browser: responsiveStateReducer,
    layout,
    activeTab,
    hoodAction,
    aboutVisibility,
    arrowVisibility,
    hideOverlay,
    chartData,
    chartFilters
});

export default rootReducer;