import styles from './MakeBarChart.css';

import React from 'react';
import BarChart from '../BarChart/BarChart';
import { connect } from 'react-redux';
import { setMake, setHideOverlay } from '../../actions';

const mapStateToProps = (state) => {
    return {
        data: state.chartData.makeData.data,
        make: state.chartFilters.make
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (make, hideOverlay) => {
            dispatch(setMake(make));
            hideOverlay ? dispatch(setHideOverlay()) : null;
        }
    }
};

const MakeBarChart = ({
    data,
    make,
    hideOverlay,
    onClick
}) => {
    const makeBarChartStyle = {
        zIndex: 1
    };
    return (
        <div
            className={styles.root}
            style={
                hideOverlay ?
                makeBarChartStyle :
                null
            }
        >
            <BarChart
                data={data}
                make={make}
                onClick={onClick}
            />
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeBarChart);