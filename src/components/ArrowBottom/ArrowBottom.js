import styles from './ArrowBottom.css';

import React, { Component } from 'react';

export default class ArrowBottom extends Component {
    render() {
        const hoodAction = this.props.hoodAction;
        return <div className={hoodAction === 'OPEN_HOOD' ? styles.active : styles.normal}></div>
    }
}