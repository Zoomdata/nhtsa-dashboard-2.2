import styles from './OverlayInstructions.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VelocityComponent } from 'velocity-react';

const mapStateToProps = (state) => {
    return {
        hideOverlay: state.hideOverlay
    }
};

class OverlayInstructions extends Component {
    render() {
        const { hideOverlay } = this.props;
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

        return (
            <VelocityComponent {...animationProps}>
                <img
                    src="src/images/pick_a_make.png"
                    className={styles.root}
                    width="427"
                    height="177"
                >
                </img>
            </VelocityComponent>
        )
    }
}

export default connect(mapStateToProps)(OverlayInstructions);