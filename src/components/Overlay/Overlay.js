import styles from './Overlay.css';

import React, { Component } from 'react';
import OverlaySplat from '../OverlaySplat/OverlaySplat';
import OverlayTitle from '../OverlayTitle/OverlayTitle';
import { connect } from 'react-redux';
import { VelocityComponent } from 'velocity-react';

const mapStateToProps = (state) => {
    return {
        makeWrapperDimensions: state.layout.makeWrapperDimensions,
        overlaySplatDimensions: state.layout.overlaySplatDimensions,
        hideOverlay: state.hideOverlay,
        aboutVisibility: state.aboutVisibility
    }
};

class Overlay extends Component {
    render() {
        const { makeWrapperDimensions, overlaySplatDimensions, aboutVisibility, hideOverlay } = this.props;
        let animationProps;
        if (hideOverlay) {
            animationProps = {
                duration: 1000,
                animation: {
                    opacity: 0
                },
                display: 'none'
            }
        } else {
            animationProps = {
                duration: 1000,
                animation: {
                    opacity: 1
                },
                display: 'auto'
            }
        }

        if (hideOverlay) {
            if (aboutVisibility === 'OPEN_ABOUT') {
                animationProps = {
                    duration: 1000,
                    animation: {
                        opacity: 1
                    },
                    display: 'inline'
                }
                this.overlayStyle = {
                    backgroundImage: 'none',
                    backgroundColor: 'rgba(0,0,0,0.8)'
                };

            } else {
                animationProps = {
                    duration: 1000,
                    animation: {
                        opacity: 0
                    },
                    display: 'none'
                }
            }
        } else {
            this.overlayStyle = {};
        }

        return (
            <VelocityComponent {...animationProps}>
                <div
                    className={styles.root}
                    style={
                        this.overlayStyle
                    }
                >
                    <OverlaySplat
                        makeWrapperDimensions={makeWrapperDimensions}
                        overlaySplatDimensions={overlaySplatDimensions}
                        aboutVisibility={aboutVisibility}
                        hideOverlay={hideOverlay}
                    />
                    <OverlayTitle
                        makeWrapperDimensions={makeWrapperDimensions}
                        aboutVisibility={aboutVisibility}
                        hideOverlay={hideOverlay}
                    />
                </div>
            </VelocityComponent>
        )
    }
};

export default connect(mapStateToProps)(Overlay);

