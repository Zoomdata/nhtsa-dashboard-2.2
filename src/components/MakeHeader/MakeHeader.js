import styles from './MakeHeader.css';

import React, { Component } from 'react';

export default class MakeHeader extends Component {
    render() {
        return <div className={styles.root}>
            Complaints <br /> by <b>Make</b>
        </div>
    }
}