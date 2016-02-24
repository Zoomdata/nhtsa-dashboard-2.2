import styles from './Dashboard.css';

import React, { Component } from 'react';
import DashboardBackground from '../DashboardBackground/DashboardBackground';
import DashboardForeground from '../DashboardForeground/DashboardForeground';
import { getWidth, getHeight } from '../../utilities';
import { setDashboardDimensions } from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        browser: state.browser
    }
};

class Dashboard extends Component {
    setDimensions(comp) {
        if (comp !== null) {
            const { dispatch } = this.props;
            const el = comp;
            const rect = el.getBoundingClientRect();
            const dashboardDimensions = {
                width: getWidth(el),
                height: getHeight(el),
                offsetLeft: rect.left + document.body.scrollLeft
            }
            const { width, height, offsetLeft } = dashboardDimensions;
            dispatch(setDashboardDimensions(width, height, offsetLeft))
        }
    }

    render() {
        return (
            <div
                className={styles.root}
                ref={comp => {
                    this.setDimensions(comp)
                }}
            >
                <DashboardBackground />
                <DashboardForeground />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Dashboard);