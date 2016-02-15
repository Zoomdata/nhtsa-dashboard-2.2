import styles from './Dashboard.css';

import React, { Component } from 'react';
import DashboardForeground from '../DashboardForeground/DashboardForeground';
import { getWidth, getHeight } from '../../utilities';
import { setDashboardDimensions } from '../../actions';

export default class Dashboard extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
        const el = this.refs.dashboard;
        const rect = el.getBoundingClientRect();
        const dashboardDimensions = {
            width: getWidth(el),
            height: getHeight(el),
            offsetLeft: rect.left + document.body.scrollLeft
        }
        const { width, height, offsetLeft } = dashboardDimensions;
        store.dispatch(setDashboardDimensions(width, height, offsetLeft))
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const aboutVisibility = this.props.aboutVisibility;
        const chartData = this.props.chartData;
        return <div className={styles.root} ref="dashboard">
            <DashboardForeground tab={this.props.tab}
                                 aboutVisibility={aboutVisibility}
                                 chartData={chartData} />
        </div>
    }
}

Dashboard.contextTypes = {
    store: React.PropTypes.object
}