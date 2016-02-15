import styles from './Top.css';

import React, { Component } from 'react';

export default class Top extends Component {
    render() {
        return <img className={styles.root} width="120" height="3" src="src/images/slot-top.png" />
    }
}