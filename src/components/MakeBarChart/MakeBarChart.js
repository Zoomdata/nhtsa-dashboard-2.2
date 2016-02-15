import styles from './MakeBarChart.css';

import React, { Component } from 'react';
import BarChart from '../BarChart/BarChart';

export default class MakeBarChart extends Component {
    render() {
        const chartData = this.props.chartData;
        return <div className={styles.root}>
            <BarChart chartData={chartData} />
        </div>
    }
}