import styles from './MakeBarChart.css';

import React from 'react';
import BarChart from '../BarChart/BarChart';

export default function MakeBarChart({data}) {
    return <div className={styles.root}>
        <BarChart data={data} />
    </div>
}