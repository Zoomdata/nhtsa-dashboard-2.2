import styles from './ShowData.css';

import React from 'react';

const ShowData = (props) => {
    const { hoodAction } = props;
    return (
        <img
            className={
                hoodAction === 'OPEN_HOOD' ?
                styles.active :
                styles.normal
            }
            width="104"
            height="77"
            src="src/images/show-data.png" />
    )
};

export default ShowData;