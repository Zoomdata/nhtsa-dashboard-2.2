import styles from './Trend.css';

import React from 'react';
import TrendChart from '../TrendChart/TrendChart';
import { connect } from 'react-redux';
import { setYear, setFilterStatus, changeComponentDataQuery, changeMetricDataQuery, changeStateDataQuery, changeGridDataQuery } from '../../actions';
import { ComponentDataQuery, MetricDataQuery, StateDataQuery, GridDataQuery } from '../../sagas';
import baseFindIndex from 'lodash._basefindindex';

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
            ComponentDataQuery.filters.remove(filter.path);

            ComponentDataQuery.filters.add(filter);
            dispatch(changeComponentDataQuery());
            MetricDataQuery.filters.remove(filter.path);
            MetricDataQuery.filters.add(filter);
            dispatch(changeMetricDataQuery());
            const yearFilterIndex = baseFindIndex(GridDataQuery.restrictions, function(filter) {
                return filter.path === 'year_string';
            });
            yearFilterIndex >= 0 ? GridDataQuery.restrictions.splice(yearFilterIndex, 1) : null;
            GridDataQuery.restrictions.push(filter);
            dispatch(changeGridDataQuery());
            changeFilterStatus ?
                dispatch(setFilterStatus('FILTERS_APPLIED')) :
                null
            if (!StateDataQuery) {
                return;
            }
            StateDataQuery.filters.remove(filter.path);
            StateDataQuery.filters.add(filter);
            dispatch(changeStateDataQuery());
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