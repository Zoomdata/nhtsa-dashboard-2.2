import styles from './NhtsaApp.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Overlay from '../../components/Overlay/Overlay';
import { setDashboardProps, setMakeWrapperProps, setOverlaySplatProps, setActiveTab, setHoodAction, setAboutVisibilityOption, changeMakeDataQuery } from '../../actions';
import Dashboard from '../../components/Dashboard/Dashboard';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';
import { verticalScrollThreshold } from '../../config/app-constants';

export default class NhtsaApp extends Component {
    componentDidMount() {
        const el = this.refs.nhtsaApp;
        if (el.scrollHeight < verticalScrollThreshold) {
            el.style.overflowY = 'visible';
        } else {
            el.style.overflowY = 'hidden';
        }
    }
    render() {
        const dashboardProps = this.props.layout.dashboardProps;
        const makeWrapperProps = this.props.layout.makeWrapperProps;
        const overlaySplatProps = this.props.layout.overlaySplatProps;
        const activeTab = this.props.activeTab;
        const hoodAction = this.props.hoodAction;
        const aboutVisibility = this.props.aboutVisibility;
        const chartData = this.props.chartData;
        let newBackgroundX = (dashboardProps.offsetLeft + dashboardProps.width) - 465;
        let newBackgroundY = 0;
        if (window.innerHeight < verticalScrollThreshold) {
            newBackgroundY = verticalScrollThreshold - 323;
        } else {
            newBackgroundY = window.innerHeight - 323;
        }
        const appStyle = {
            backgroundPositionX: newBackgroundX,
            backgroundPositionY: newBackgroundY
        };
        return (
            <div className={styles.root} style={appStyle} ref="nhtsaApp">
                <Overlay makeWrapperProps={makeWrapperProps}
                         overlaySplatProps={overlaySplatProps}
                         onSetOverlaySplatProps={(offsetWidth, paddingLeft, paddingRight, borderLeft, borderRight)=>this.setOverlaySplatProps(offsetWidth, paddingLeft, paddingRight, borderLeft, borderRight)} />
                <Dashboard tab={activeTab}
                           onSetDashboardProps={(width, height, offsetLeft) => this.setDashboardProps(width, height, offsetLeft)}
                           onSetMakeWrapperProps={(width, height, offsetTop, offsetLeft) => this.setMakeWrapperProps(width, height, offsetTop, offsetLeft)}
                           onSetActiveTab={tab => this.setActiveTab(tab)}
                           aboutVisibility={aboutVisibility}
                           onSetAboutVisibilityOption={option => this.setAboutVisibilityOption(option)}
                           chartData={chartData}
                           onChangeMakeDataQuery={() => this.changeMakeDataQuery()} />
                <footer>
                    © 2014 <a href="http://www.zoomdata.com/">Zoomdata</a>, Inc. <a href="http://www.zoomdata.com/contact">Contact</a> <a href="http://www.zoomdata.com/terms">Legal</a>
                </footer>
                <ButtonContainer dashboardProps={dashboardProps}
                                 hoodAction={hoodAction}
                                 onSetHoodAction={action=>this.setHoodAction(action)} />
            </div>
        )
    }
    setDashboardProps(width, height, offsetLeft) {
        this.props.dispatch(setDashboardProps(width, height, offsetLeft));
    }
    setMakeWrapperProps(width, height, offsetTop, offsetLeft) {
        this.props.dispatch(setMakeWrapperProps(width, height, offsetTop, offsetLeft));
    }
    setOverlaySplatProps(offsetWidth, paddingLeft, paddingRight, borderLeft, borderRight) {
        this.props.dispatch(setOverlaySplatProps(offsetWidth, paddingLeft, paddingRight, borderLeft, borderRight));
    }
    setActiveTab(tab) {
        this.props.dispatch(setActiveTab(tab));
    }
    setHoodAction(action) {
        this.props.dispatch(setHoodAction(action));
    }
    setAboutVisibilityOption(option) {
        this.props.dispatch(setAboutVisibilityOption(option));
    }
    changeMakeDataQuery() {
        this.props.dispatch(changeMakeDataQuery());
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function mapStateToProps(state) {
    return {
        layout: state.layout,
        activeTab: state.activeTab,
        hoodAction: state.hoodAction,
        aboutVisibility: state.aboutVisibility,
        chartData: state.chartData
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(NhtsaApp)