import styles from './OverlayTitle.css';

import React, { Component } from 'react';
import OverlayDescription from '../OverlayDescription/OverlayDescription';

export default class OverlayTitle extends Component {
    render() {
        const makeWrapperProps = this.props.makeWrapperProps;
        const overlayTitleStyle = {
            top: makeWrapperProps.offsetTop,
            left: makeWrapperProps.offsetLeft + makeWrapperProps.width + 75
        };
        return (
            <div className={styles.root} style={overlayTitleStyle} >
                VEHICLE <br /> COMPLAINTS
                <OverlayDescription />
            </div>
        )
    }
}