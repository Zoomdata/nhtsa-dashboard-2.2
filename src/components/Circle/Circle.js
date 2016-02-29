import styles from './Circle.css';

import React from 'react';
import { connect } from 'react-redux';
import { setFilterStatus, changeComponentDataQuery } from '../../actions';
import { ComponentDataQuery } from '../../sagas';

const mapStateToProps = (state) => {
    return {
        filterStatus: state.chartFilters.filterStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(setFilterStatus('FILTERS_RESET'));
            ComponentDataQuery.filters.remove('model');
            dispatch(changeComponentDataQuery());
        }
    }
};

const Circle  = ({
    filterStatus,
    onClick
}) => {

    return (
        <div
            className={
                filterStatus === 'FILTERS_APPLIED' ?
                    styles.normal :
                    styles.disabled
            }
            onClick={onClick}
        >↺
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Circle);