import styles from './Trend.css';

import React from 'react';
import TrendChart from '../TrendChart/TrendChart';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        data: state.chartData.yearData.data
    }
};

const Trend = ({data}) => {
    return (
        <div
            className={styles.root}
        >
            <TrendChart
                data={data}
            />
        </div>
    )
};

export default connect(mapStateToProps)(Trend);