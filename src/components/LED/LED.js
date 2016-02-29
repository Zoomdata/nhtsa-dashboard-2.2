import styles from './LED.css';

import React, { Component } from 'react';
import Background from '../Background/Background';
import Foreground from '../Foreground/Foreground';

export default class LED extends Component {
    render() {
        const { position } = this.props;
        return position === '5' ? this.renderFive() : this.renderSix();
    }
    renderFive() {
        return <div className={styles.five}>
            <Background />
            <Foreground />
        </div>
    }
    renderSix() {
        return <div className={styles.six}>
            <Background />
            <Foreground />
        </div>
    }
}