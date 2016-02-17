import styles from './TabLinks.css';

import React from 'react';
import ActiveContainer from '../../containers/Active/Active';

const TabLinks = () => {
    return (
        <ul className={styles.root}>
            <ActiveContainer chart="scatterplot" />
            <ActiveContainer chart="map" />
        </ul>
    )
}

export default TabLinks;