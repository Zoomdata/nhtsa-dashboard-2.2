import styles from './Overlay.css';

import React, { Component } from 'react';
import OverlaySplat from '../OverlaySplat/OverlaySplat';
import OverlayTitle from '../OverlayTitle/OverlayTitle';

export default class Overlay extends Component {
    render() {
        const { makeWrapperDimensions, overlaySplatDimensions } = this.props

        return (
            <div
                className={
                    styles.root
                }>
                <OverlaySplat
                    makeWrapperDimensions={
                        makeWrapperDimensions
                    }
                    overlaySplatDimensions={
                        overlaySplatDimensions
                    }
                />
                <OverlayTitle
                    makeWrapperDimensions={
                        makeWrapperDimensions
                    }
                />
            </div>
        )
    }
}