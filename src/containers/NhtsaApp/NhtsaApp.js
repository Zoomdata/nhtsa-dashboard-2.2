import styles from './NhtsaApp.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Overlay from '../../components/Overlay/Overlay';
import Dashboard from '../../components/Dashboard/Dashboard';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';
import { verticalScrollThreshold } from '../../config/app-constants';

export default class NhtsaApp extends Component {
    render() {
        const { browser } = this.props;
        const { dashboardDimensions, makeWrapperDimensions, overlaySplatDimensions } = this.props.layout;
        const activeTab = this.props.activeTab;
        const hoodAction = this.props.hoodAction;
        const aboutVisibility = this.props.aboutVisibility;
        const chartData = this.props.chartData;
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
                <ButtonContainer
                    dashboardDimensions={
                        dashboardDimensions
                    }
                    hoodAction={
                        hoodAction
                    }
                />
            </div>
        )
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function mapStateToProps(state) {
    return {
        browser: state.browser,
        layout: state.layout,
        activeTab: state.activeTab,
        hoodAction: state.hoodAction,
        aboutVisibility: state.aboutVisibility,
        chartData: state.chartData
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(NhtsaApp)