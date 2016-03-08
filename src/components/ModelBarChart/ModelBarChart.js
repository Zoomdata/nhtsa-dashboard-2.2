import styles from './ModelBarChart.css';

import React from 'react';
import BarChart from '../BarChart/BarChart';
import { connect } from 'react-redux';
import { setModel, setFilterStatus, changeComponentDataQuery, changeMetricDataQuery, changeStateDataQuery, changeGridDataQuery } from '../../actions';
import { ComponentDataQuery, MetricDataQuery, StateDataQuery, GridDataQuery } from '../../sagas';
import baseFindIndex from 'lodash._basefindindex';
import { gridDetails } from '../../config/app-constants';

const mapStateToProps = (state) => {
    return {
        data: state.chartData.modelData.data,
        model: state.chartFilters.model,
        browser: state.browser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (model) => {
            gridDetails.offset = 0;
            gridDetails.hasNextDetails = true;
            const filter = {
                path: 'model',
                operation: 'IN',
                value: [model]
            };
            dispatch(setModel(model));
            ComponentDataQuery.filters.remove(filter.path);
            ComponentDataQuery.filters.add(filter);
            dispatch(changeComponentDataQuery());
            MetricDataQuery.filters.remove(filter.path);
            MetricDataQuery.filters.add(filter);
            dispatch(changeMetricDataQuery());
            const modelFilterIndex = baseFindIndex(GridDataQuery.restrictions, function(filter) {
                return filter.path === 'model';
            });
            modelFilterIndex >= 0 ? GridDataQuery.restrictions.splice(modelFilterIndex, 1) : null;
            GridDataQuery.restrictions.push(filter);
            dispatch(changeGridDataQuery());
            dispatch(setFilterStatus('FILTERS_APPLIED'))
            if (!StateDataQuery) {
                return;
            }
            StateDataQuery.filters.remove(filter.path);
            StateDataQuery.filters.add(filter);
            dispatch(changeStateDataQuery());
        }
    }
};

const ModelBarChart = ({
    data,
    model,
    onClick
    }) => {
    return (
        <div
            className={styles.root}
        >
            <BarChart
                data={data}
                activeBar={model}
                onClick={onClick}
            />
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelBarChart);