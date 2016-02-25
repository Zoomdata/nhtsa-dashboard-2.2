import styles from './ModelBarChart.css';

import React from 'react';
import BarChart from '../BarChart/BarChart';
import { connect } from 'react-redux';
import { setModel } from '../../actions';

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
            dispatch(setModel(model));
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
                active={model}
                onClick={onClick}
            />
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelBarChart);