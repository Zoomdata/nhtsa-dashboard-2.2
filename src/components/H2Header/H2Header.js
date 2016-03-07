import styles from './H2Header.css';

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        metricData: state.chartData.metricData.data,
        metricTotalsData: state.chartData.metricTotalsData.data
    }
};

const addCommas = (nStr) => {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
};

const H2Header = ({
    metricData,
    metricTotalsData,
}) => {
    const data = !metricData ? 0 : metricData[0].current.count;
    const totalsData = !metricTotalsData ? 0 : metricTotalsData[0].current.count;
    return (
        <h2
            className={styles.root}
        >
            <b>Vehicle Complaints:</b> Showing <span>{addCommas(data)}</span> of {addCommas(totalsData)} RECORDS
        </h2>
    )
};

export default connect(mapStateToProps)(H2Header);