import styles from './NhtsaApp.css';

import React from 'react';
import { connect } from 'react-redux';
import Overlay from '../../components/Overlay/Overlay';
import Dashboard from '../../components/Dashboard/Dashboard';
import { ButtonContainerContainer } from '../../containers/ButtonContainer/ButtonContainer';
import { verticalScrollThreshold } from '../../config/app-constants';

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
const mapStateToProps = (state) => {
    return {
        browser: state.browser,
        dashboardDimensions: state.layout.dashboardDimensions
    }
}

const NhtsaApp = ({
    browser,
    dashboardDimensions
}) => {
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
            className={styles.root}
            style={nhtsaAppStyle}
        >
            <Overlay />
            <Dashboard />
            <footer>
                © 2014 <a href="http://www.zoomdata.com/">Zoomdata</a>, Inc. <a href="http://www.zoomdata.com/contact">Contact</a> <a href="http://www.zoomdata.com/terms">Legal</a>
            </footer>
            <ButtonContainerContainer />
        </div>
    )
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(NhtsaApp)