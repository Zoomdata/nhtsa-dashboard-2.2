import styles from './DashboardForeground.css';

import React, { Component } from 'react';
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

export default class DashboardForeground extends Component {
    render() {
        const aboutVisibility = this.props.aboutVisibility;
        const chartData = this.props.chartData;
        return <div className={styles.root}>
            <AboutBlockContainer />
            <BackgroundImage />
            <YearTrendWrapper />
            <MakeWrapper />
            <OverlayInstructions />
            <Connector />
            <Header />
            <ModelWrapper />
            <Gauges />
            <Tabs tab={this.props.tab} />
            <Annotation />
        </div>
    }
}