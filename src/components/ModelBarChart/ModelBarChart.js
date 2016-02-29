import styles from './ModelBarChart.css';

import React from 'react';
import BarChart from '../BarChart/BarChart';
import { connect } from 'react-redux';
import { setModel, setFilterStatus, changeComponentDataQuery } from '../../actions';
import { ComponentDataQuery } from '../../sagas';

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
            const filter = {
                path: 'model',
                operation: 'IN',
                value: [model]
            };
            dispatch(setModel(model));
            ComponentDataQuery.filters.add(filter);
            dispatch(changeComponentDataQuery());
            dispatch(setFilterStatus('FILTERS_APPLIED'))
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