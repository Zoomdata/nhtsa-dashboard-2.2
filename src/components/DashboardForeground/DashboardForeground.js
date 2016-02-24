import styles from './DashboardForeground.css';

import React from 'react';
import { AboutBlockContainer } from '../../containers/AboutBlock/AboutBlock';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import YearTrendWrapper from '../YearTrendWrapper/YearTrendWrapper';
import MakeWrapper from '../MakeWrapper/MakeWrapper';
import OverlayInstructions from '../OverlayInstructions/OverlayInstructions';
import Connector from '../Connector/Connector';
import Header from '../Header/Header';
import ModelWrapper from '../ModelWrapper/ModelWrapper';
import Gauges from '../Gauges/Gauges';
import Tabs from '../Tabs/Tabs';
import Annotation from '../Annotation/Annotation';
import { connect } from 'react-redux';
import { VelocityComponent } from 'velocity-react';
import { setArrowVisibilityOption } from '../../actions';

const mapStateToProps = (state) => {
    return {
        hoodAction: state.hoodAction
    }
};

const DashboardForeground = ({
    hoodAction,
    dispatch
}) => {
    let animationProps;
    const liftDuration = 2000;
    if (hoodAction === 'CLOSE_HOOD') {
        animationProps = {
            duration: liftDuration,
            animation: {
                rotateX: 0
            },
            complete: function() {
                dispatch(setArrowVisibilityOption('SHOW_ARROW'));
            }
        }
    } else {
        animationProps = {
            easing: 'easeOutBack',
            duration: liftDuration,
            animation: {
                rotateX: 90
            },
            complete: function() {
                dispatch(setArrowVisibilityOption('HIDE_ARROW'));
            }
        }
    }
    return (
        <VelocityComponent {...animationProps}>
            <div
                className={styles.root}>
                <AboutBlockContainer />
                <BackgroundImage />
                <YearTrendWrapper />
                <MakeWrapper />
                <OverlayInstructions />
                <Connector />
                <Header />
                <ModelWrapper />
                <Gauges />
                <Tabs />
                <Annotation />
            </div>
        </VelocityComponent>
    )
}

export default connect(mapStateToProps)(DashboardForeground);