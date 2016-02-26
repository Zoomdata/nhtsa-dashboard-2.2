import styles from './MakeBarChart.css';

import React from 'react';
import BarChart from '../BarChart/BarChart';
import { connect } from 'react-redux';
import { setMake, changeModelDataQuery, setHideOverlay } from '../../actions';
import { ModelDataQuery } from '../../sagas';

const mapStateToProps = (state) => {
    return {
        data: state.chartData.makeData.data,
        make: state.chartFilters.make,
        hideOverlay: state.hideOverlay,
        browser: state.browser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (make, hideOverlay) => {
            const filter = {
                path: 'make',
                operation: 'IN',
                value: [make]
            };
            dispatch(setMake(make));
            ModelDataQuery.filters.add(filter);
            dispatch(changeModelDataQuery());
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
                hideOverlay ? makeBarChartStyle : null
            }
        >
            <BarChart
                data={data}
                activeBar={make}
                onClick={onClick}
            />
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeBarChart);