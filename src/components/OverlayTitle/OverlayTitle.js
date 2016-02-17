import styles from './OverlayTitle.css';

import React, { Component } from 'react';
import OverlayDescription from '../OverlayDescription/OverlayDescription';

const OverlayTitle = ({makeWrapperDimensions}) => {
    const overlayTitleStyle = {
        top: makeWrapperDimensions.offsetTop,
        left: makeWrapperDimensions.offsetLeft + makeWrapperDimensions.width + 75
    };
    return (
        <div
            className={styles.root}
            style={overlayTitleStyle}
        >
        VEHICLE
            <br />
        COMPLAINTS
            <OverlayDescription />
        </div>
    )
};

export default OverlayTitle;