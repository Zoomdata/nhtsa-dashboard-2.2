import styles from './Map.css';

import React from 'react';
import MapChart from '../MapChart/MapChart';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        data: state.chartData.stateData.data,
        browser: state.browser
    }
};

const Map = ({data}) => {
    return (
        <div
            className={styles.root}
        >
            <MapChart
                data={data}
            />
        </div>
    )
};

export default connect(mapStateToProps)(Map);