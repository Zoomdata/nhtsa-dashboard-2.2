import styles from './Dashboard.css';

import React, { Component } from 'react';
import DashboardForeground from '../DashboardForeground/DashboardForeground';
import { getWidth, getHeight } from '../../utilities';
import { setDashboardDimensions } from '../../actions';
import { connect } from 'react-redux';

class Dashboard extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        const el = this.refs.dashboard;
        const rect = el.getBoundingClientRect();
        const dashboardDimensions = {
            width: getWidth(el),
            height: getHeight(el),
            offsetLeft: rect.left + document.body.scrollLeft
        }
        const { width, height, offsetLeft } = dashboardDimensions;
        dispatch(setDashboardDimensions(width, height, offsetLeft))
    }

    render() {
        return (
            <div
                className={styles.root}
                ref="dashboard">
                <DashboardForeground />
            </div>
        )
    }
}

export default connect()(Dashboard);