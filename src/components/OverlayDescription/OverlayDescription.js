import styles from './OverlayDescription.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VelocityComponent } from 'velocity-react';

const mapStateToProps = (state) => {
    return {
        hideOverlay: state.hideOverlay
    }
};

class OverlayDescription extends Component {
    render() {
        const { hideOverlay } = this.props;
        let animationProps;
        if (hideOverlay) {
            animationProps = {
                animation: {
                    opacity: 0
                },
                display: 'none'
            }
        } else {
            animationProps = {
                animation: {
                    opacity: 1
                },
                display: 'auto'
            }
        }

        return (
            <VelocityComponent {...animationProps}>
                <div
                    className={styles.root}
                >
                    WE used the Zoomdata API to create an app that
                    <br />
                    visualizes a <b>quarter-million</b> records in real time.
                </div>
            </VelocityComponent>
        )
    }
};

export default connect(mapStateToProps)(OverlayDescription);