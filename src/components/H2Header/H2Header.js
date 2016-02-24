import styles from './H2Header.css';

import React from 'react';

const H2Header = () => {
    return (
        <h2
            className={styles.root}
        >
            <b>Vehicle Complaints:</b> Showing <span>36,785</span> of 257,001 RECORDS
        </h2>
    )
};

export default H2Header;