import styles from './OverlayDescription.css';

import React, { Component } from 'react';

export default class OverlayDescription extends Component {
    render() {
        return (
            <div className={styles.root}>
                WE used the Zoomdata API to create an app that
                <br />
                visualizes a <b>quarter-million</b> records in real time.
            </div>
        )
    }
}