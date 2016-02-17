import { connect } from 'react-redux';
import React from 'react';
import Active from '../../components/Active/Active';
import { setActiveTab } from '../../actions';

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab
    }
};

const ActiveContainer = ({
    activeTab,
    chart,
    dispatch
}) => {
    return (
        <Active
            activeTab={activeTab}
            chart={chart}
            onClick={
                () => {
                    const selectedTab = 'SHOW_' + chart.toUpperCase();
                    dispatch(setActiveTab(selectedTab));
                }
            }
        />
    )
};

export default connect(mapStateToProps)(ActiveContainer);