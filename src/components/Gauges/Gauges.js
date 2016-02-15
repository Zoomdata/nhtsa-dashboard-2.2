import styles from './Gauges.css';

import React, { Component } from 'react';
import Gauge from '../Gauge/Gauge';

export default class Gauges extends Component {
    render() {
        return <div className={styles.root}>
            <Gauge />
            <Gauge />
            <Gauge />
            <Gauge />
        </div>
    }
}