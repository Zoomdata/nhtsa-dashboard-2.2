import styles from './Tab.css';

import React from 'react';
import ComponentScatterplot from '../ComponentScatterplot/ComponentScatterplot';
import Map from '../Map/Map';

const Tab = ({
    activeTab,
    chart
}) => {
    const tab = activeTab.split('_')[1].toLowerCase();
    return (
        <div
            className={
                tab === chart ?
                styles.active :
                styles.normal
            }>{chart === 'scatterplot' ? <ComponentScatterplot /> : <Map />}
        </div>
    )
};

export default Tab;