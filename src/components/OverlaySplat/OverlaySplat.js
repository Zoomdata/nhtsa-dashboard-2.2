import styles from './OverlaySplat.css'

import React, { Component } from 'react';
import { getWidth } from '../../utilities';
import { setOverlaySplatDimensions } from '../../actions';
import { connect } from 'react-redux';
import image from '../../images/overlay_splat4.gif';

class OverlaySplat extends Component {
    setDimensions(comp) {
            if (comp !== null) {
                const el = comp;
                const width = getWidth(el);
                const { overlaySplatDimensions, dispatch } = this.props;

                if (overlaySplatDimensions.width !== width) {
                    dispatch(setOverlaySplatDimensions(width));
                }
            }
    }
    render() {
        const { makeWrapperDimensions, overlaySplatDimensions, aboutVisibility, hideOverlay } = this.props;
        const overlaySplatStyle = {
            width: (makeWrapperDimensions.width * 3) + 'px',
            height: (makeWrapperDimensions.height + 200) + 'px',
            left: (((makeWrapperDimensions.width / 2) + makeWrapperDimensions.offsetLeft) - (overlaySplatDimensions.width / 2)) + 'px'
        };

        if (hideOverlay) {
            if (aboutVisibility === 'OPEN_ABOUT') {
                this.overlaySplatStyle = {
                    width: (makeWrapperDimensions.width * 3) + 'px',
                    height: (makeWrapperDimensions.height + 200) + 'px',
                    left: (((makeWrapperDimensions.width / 2) + makeWrapperDimensions.offsetLeft) - (overlaySplatDimensions.width / 2)) + 'px',
                    display: 'none'
                };
            }
        } else {
            this.overlaySplatStyle = {
                width: (makeWrapperDimensions.width * 3) + 'px',
                height: (makeWrapperDimensions.height + 200) + 'px',
                left: (((makeWrapperDimensions.width / 2) + makeWrapperDimensions.offsetLeft) - (overlaySplatDimensions.width / 2)) + 'px',
                display: 'block'
            }
        }

        return (
            <img
                src={image}
                className={styles.root}
                style={
                    overlaySplatDimensions.width !== null ||
                    overlaySplatDimensions.width > 0 ?
                        (this.overlaySplatStyle ?
                            this.overlaySplatStyle :
                            overlaySplatStyle) :
                        {}
                }
                ref={
                    comp => this.setDimensions(comp)
                }
            />
        )
    }
}

export default connect()(OverlaySplat);