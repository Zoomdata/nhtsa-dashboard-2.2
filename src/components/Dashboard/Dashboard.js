import styles from './Dashboard.css';

import React, { Component } from 'react';
import DashboardForeground from '../DashboardForeground/DashboardForeground';

export default class Dashboard extends Component {
    componentDidMount() {
        const el = this.refs.dashboard;
        const paddingLeft = parseFloat(getComputedStyle(el).getPropertyValue('padding-left'));
        const paddingRight = parseFloat(getComputedStyle(el).getPropertyValue('padding-right'));
        const paddingTop = parseFloat(getComputedStyle(el).getPropertyValue('padding-top'));
        const paddingBottom = parseFloat(getComputedStyle(el).getPropertyValue('padding-bottom'));
        const borderLeft = parseFloat(getComputedStyle(el).getPropertyValue('border-left-width'));
        const borderRight = parseFloat(getComputedStyle(el).getPropertyValue('border-right-width'));
        const borderTop = parseFloat(getComputedStyle(el).getPropertyValue('border-top-width'));
        const borderBottom = parseFloat(getComputedStyle(el).getPropertyValue('border-bottom-width'));
        const rect = el.getBoundingClientRect();
        const dashboardProps = {
            width: el.offsetWidth - paddingLeft - paddingRight - borderLeft - borderRight,
            height: el.offsetHeight - paddingTop - paddingBottom - borderTop - borderBottom,
            offsetLeft: rect.left + document.body.scrollLeft
        }
        this.setProps(dashboardProps.width, dashboardProps.height, dashboardProps.offsetLeft);
    }
    render() {
        const aboutVisibility = this.props.aboutVisibility;
        const chartData = this.props.chartData;
        return <div className={styles.root} ref="dashboard">
            <DashboardForeground tab={this.props.tab}
                                 onSetActiveTab={this.props.onSetActiveTab}
                                 onSetMakeWrapperProps={this.props.onSetMakeWrapperProps}
                                 aboutVisibility={aboutVisibility}
                                 onSetAboutVisibilityOption={this.props.onSetAboutVisibilityOption}
                                 chartData={chartData}
                                 onChangeMakeDataQuery={this.props.onChangeMakeDataQuery} />
        </div>
    }
    setProps(width, height, offsetLeft) {
        this.props.onSetDashboardProps(width, height, offsetLeft);
    }

}