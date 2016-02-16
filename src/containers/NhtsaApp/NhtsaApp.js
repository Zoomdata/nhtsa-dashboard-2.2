import styles from './NhtsaApp.css';

import React from 'react';
import { connect } from 'react-redux';
import Overlay from '../../components/Overlay/Overlay';
import Dashboard from '../../components/Dashboard/Dashboard';
import { Hood } from '../../containers/Hood/Hood';
import { verticalScrollThreshold } from '../../config/app-constants';

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
const mapStateToProps = (state) => {
    return {
        browser: state.browser,
        layout: state.layout,
        activeTab: state.activeTab,
        hoodAction: state.hoodAction,
        aboutVisibility: state.aboutVisibility,
        chartData: state.chartData
    }
}

export default function NhtsaApp (state) {
    const { browser, layout, activeTab, hoodAction, aboutVisibility, chartData } = state;
    const { dashboardDimensions, makeWrapperDimensions, overlaySplatDimensions } = layout;
    let newBackgroundX = (dashboardDimensions.offsetLeft + dashboardDimensions.width) - 465;
    let newBackgroundY;
    let newOverflowY = 'hidden';
    if (window.innerHeight < verticalScrollThreshold) {
        newBackgroundY = verticalScrollThreshold - 323;
    } else {
        newBackgroundY = window.innerHeight - 323;
    }
    if (browser.height < verticalScrollThreshold) {
        newOverflowY = 'visible';
    }
    const nhtsaAppStyle = {
        backgroundPositionX: newBackgroundX,
        backgroundPositionY: newBackgroundY,
        overflowY: newOverflowY
    };
    return (
        <div
            className={
                styles.root
            }
            style={
                nhtsaAppStyle
            }
        >
            <Overlay
                makeWrapperDimensions={
                    makeWrapperDimensions
                }
                overlaySplatDimensions={
                    overlaySplatDimensions
                }
            />
            <Dashboard
                tab={
                    activeTab
                }
                aboutVisibility={
                    aboutVisibility
                }
                chartData={
                    chartData
                }
            />
            <footer>
                © 2014 <a href="http://www.zoomdata.com/">Zoomdata</a>, Inc. <a href="http://www.zoomdata.com/contact">Contact</a> <a href="http://www.zoomdata.com/terms">Legal</a>
            </footer>
            <Hood />
        </div>
    )
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(NhtsaApp)