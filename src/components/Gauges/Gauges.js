import styles from './Gauges.css';

import React from 'react';
import Gauge from '../Gauge/Gauge';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        metricData: state.chartData.metricData.data,
        metricTotalsData: state.chartData.metricTotalsData.data
    }
};

const Gauges = ({
    metricData,
    metricTotalsData,
}) => {
    return (
        <div
            className={styles.root}
        >
            <Gauge
                id="crashes-gauge"
                name="CRASHES"
                data={metricData}
                max={metricTotalsData}
            />
            <Gauge
                id="injuries-gauge"
                name="INJURIES"
                data={metricData}
                max={metricTotalsData}
            />
            <Gauge
                id="fires-gauge"
                name="FIRES"
                data={metricData}
                max={metricTotalsData}
            />
            <Gauge
                id="speed-gauge"
                name="AVG. SPEED"
                data={metricData}
                max={metricTotalsData}
            />
        </div>
    )
};

export default connect(mapStateToProps)(Gauges);