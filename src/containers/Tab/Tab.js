import { connect } from 'react-redux';
import React from 'react';
import Tab from '../../components/Tab/Tab';

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab
    }
};

const TabContainer = ({
    activeTab,
    chart
}) => {
    return (
        <Tab
            activeTab={activeTab}
            chart={chart}
        />
    )
}

export default connect(mapStateToProps)(TabContainer);