import styles from './TabContent.css';

import React from 'react';
import TabContainer from '../../containers/Tab/Tab';

const TabContent = () => {
    return (
        <div className={styles.root}>
            <TabContainer chart="scatterplot" />
            <TabContainer chart="map" />
        </div>
    )
};

export default TabContent;