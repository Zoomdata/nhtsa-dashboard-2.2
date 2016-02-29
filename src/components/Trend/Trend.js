import styles from './Trend.css';

import React from 'react';
import TrendChart from '../TrendChart/TrendChart';
import { connect } from 'react-redux';
import { setYear, setFilterStatus, changeComponentDataQuery } from '../../actions';
import { ComponentDataQuery } from '../../sagas';

const mapStateToProps = (state) => {
    return {
        data: state.chartData.yearData.data,
        filterStatus: state.chartFilters.filterStatus
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBrushEnd: (selectedYears, changeFilterStatus) => {
            const filter = {
                path: 'year_string',
                operation: 'IN',
                value: selectedYears
            };
            dispatch(setYear(selectedYears));
            ComponentDataQuery.filters.add(filter);
            dispatch(changeComponentDataQuery());
            changeFilterStatus ?
                dispatch(setFilterStatus('FILTERS_APPLIED')) :
                null
        }
    }
}

const Trend = ({
    data,
    filterStatus,
    onBrushEnd
}) => {
    return (
        <div
            className={styles.root}
        >
            <TrendChart
                data={data}
                filterStatus={filterStatus}
                onBrushEnd={onBrushEnd}
            />
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Trend);