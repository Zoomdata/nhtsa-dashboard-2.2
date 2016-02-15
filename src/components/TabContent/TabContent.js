import styles from './TabContent.css';

import React, { Component } from 'react';
import Tab from '../Tab/Tab';

export default class TabContent extends Component {
    render() {
        const tab = this.props.tab;
        return <div className={styles.root}>
            <Tab tab={tab} chart="scatterplot" />
            <Tab tab={tab} chart="map" />
        </div>
    }
}