import styles from './Tab.css';

import React, { Component } from 'react';
import Scatterplot from '../Scatterplot/Scatterplot';
import Map from '../Map/Map';

export default class Tab extends Component {
    render() {
        const chart = this.props.chart;
        const tab = this.props.tab.split('_')[1].toLowerCase();
        return <div className={tab === chart ? styles.active : styles.normal}>
            {chart === 'scatterplot' ? <Scatterplot /> : <Map />}
        </div>
    }
}