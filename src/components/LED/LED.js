import styles from './LED.css';

import React from 'react';
import Background from '../Background/Background';
import Foreground from '../Foreground/Foreground';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        metricTotalsData: state.chartData.metricTotalsData,
        metricData: state.chartData.metricData
    }
}
const LED = ({
    metricTotalsData,
    metricData,
    position
}) => {
    if (position === '5') {
        const data = !metricData.data ? 0 : metricData.data[0].current.count;
        return (
            <div
                className={styles.five}>
                <Background
                    data='88888'
                />
                <Foreground
                    data={data}
                />
            </div>
        )
    } else {
        const data = !metricTotalsData.data ? 888888 : metricTotalsData.data[0].current.count;
        return (
            <div
                className={styles.six}>
                <Background
                    data='888888'
                />
                <Foreground
                    data={data}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(LED);
