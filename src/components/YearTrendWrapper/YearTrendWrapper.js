import styles from './YearTrendWrapper.css';

import React, { Component } from 'react';
import TrendHeader from '../TrendHeader/TrendHeader';
import Trend from '../Trend/Trend';
import { AboutButton } from '../AboutButton/AboutButton';

export default class YearTrendWrapper extends Component {
    render() {
        return <div className={styles.root}>
            <TrendHeader />
            <Trend />
            <AboutButton />
        </div>
    }
}