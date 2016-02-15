import styles from './Overlay.css';

import React, { Component } from 'react';
import OverlaySplat from '../OverlaySplat/OverlaySplat';
import OverlayTitle from '../OverlayTitle/OverlayTitle';

export default class Overlay extends Component {
    render() {
        const makeWrapperProps = this.props.makeWrapperProps;
        const overlaySplatProps = this.props.overlaySplatProps;
        return <div className={styles.root}>
            <OverlaySplat makeWrapperProps={makeWrapperProps}
                          overlaySplatProps={overlaySplatProps}
                          onSetOverlaySplatProps={this.props.onSetOverlaySplatProps} />
            <OverlayTitle makeWrapperProps={makeWrapperProps} />
        </div>
    }
}