import styles from './TabLinks.css';

import React, { Component } from 'react';
import Active from '../Active/Active';

export default class TabLinks extends Component {
    render() {
        const tab = this.props.tab;
        return <ul className={styles.root}>
            <Active tab={tab} chart="scatterplot"
                    onSetActiveTab={this.props.onSetActiveTab} />
            <Active tab={tab} chart="map"
                    onSetActiveTab={this.props.onSetActiveTab} />
        </ul>
    }
}