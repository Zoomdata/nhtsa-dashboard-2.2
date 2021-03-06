import styles from './MakeBarChart.css';

import React from 'react';
import BarChart from '../BarChart/BarChart';
import { connect } from 'react-redux';
import { setMake, changeModelDataQuery, changeComponentDataQuery, changeMetricDataQuery, changeStateDataQuery, changeGridDataQuery, setHideOverlay } from '../../actions';
import { ModelDataQuery, ComponentDataQuery, MetricDataQuery, StateDataQuery, GridDataQuery } from '../../sagas';
import baseFindIndex from 'lodash._basefindindex';
import { gridDetails } from '../../config/app-constants';

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
            gridDetails.offset = 0;
            gridDetails.hasNextDetails = true;
            const filter = {
                path: 'make',
                operation: 'IN',
                value: [make]
            };
            dispatch(setMake(make));
            ModelDataQuery.filters.remove(filter.path);
            ModelDataQuery.filters.add(filter);
            dispatch(changeModelDataQuery());
            ComponentDataQuery.filters.remove(filter.path);
            ComponentDataQuery.filters.remove('model');
            ComponentDataQuery.filters.add(filter);
            dispatch(changeComponentDataQuery());
            MetricDataQuery.filters.remove(filter.path);
            MetricDataQuery.filters.remove('model');
            MetricDataQuery.filters.add(filter);
            dispatch(changeMetricDataQuery());
            const makeFilterIndex = baseFindIndex(GridDataQuery.restrictions, function(filter) {
                return filter.path === 'make';
            });
            makeFilterIndex >= 0 ? GridDataQuery.restrictions.splice(makeFilterIndex, 1) : null;
            GridDataQuery.restrictions.push(filter);
            dispatch(changeGridDataQuery());
            hideOverlay ? dispatch(setHideOverlay()) : null;
            if (!StateDataQuery) {
                return;
            }
            StateDataQuery.filters.remove(filter.path);
            StateDataQuery.filters.remove('model');
            StateDataQuery.filters.add(filter);
            dispatch(changeStateDataQuery());
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