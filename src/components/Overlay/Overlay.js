import styles from './Overlay.css';

import React from 'react';
import OverlaySplat from '../OverlaySplat/OverlaySplat';
import OverlayTitle from '../OverlayTitle/OverlayTitle';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        makeWrapperDimensions: state.layout.makeWrapperDimensions,
        overlaySplatDimensions: state.layout.overlaySplatDimensions
    }
};

const Overlay = ({
    makeWrapperDimensions,
    overlaySplatDimensions
}) => {
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
};

export default connect(mapStateToProps)(Overlay);

