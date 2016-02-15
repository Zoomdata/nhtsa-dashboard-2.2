import styles from './TrendHeader.css';

import React, { Component } from 'react';

export default class TrendHeader extends Component {
    render() {
        return <div className={styles.root}>
            By <b>Model Year</b>
        </div>
    }
}