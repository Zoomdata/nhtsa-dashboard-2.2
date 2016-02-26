import styles from './ComponentScatterplot.css';

import React from 'react';
import ScatterplotChart from '../ScatterplotChart/ScatterplotChart';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        data: state.chartData.componentData.data,
        browser: state.browser
    }
};

const ComponentScatterplot = ({data}) => {
    return (
        <div className={styles.root}
        >
            <ScatterplotChart
                data={data}
            />
        </div>
    )
};

export default connect(mapStateToProps)(ComponentScatterplot);