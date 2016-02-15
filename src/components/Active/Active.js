import styles from './Active.css';

import React, { Component } from 'react';

export default class Active extends Component {
    render() {
        const chart = this.props.chart;
        const tab = this.props.tab.split('_')[1].toLowerCase();
        return <li className={tab === chart ? styles.root : null} onClick={()=>this.setActiveTab(chart)}>
            <a href={'#' + chart + '-tab'}>
                {chart === 'scatterplot' ? 'Failed Components' : 'Map'}
            </a>
        </li>
    }
    setActiveTab(chart) {
        const selectedTab = 'SHOW_' + chart.toUpperCase();
        this.props.onSetActiveTab(selectedTab);
    }
}