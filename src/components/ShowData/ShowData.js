import styles from './ShowData.css';

import React from 'react';

const ShowData = ({
    hoodAction,
    arrowVisibility
}) => {
    const showDataStyles = {
        display: 'none'
    };

    return (
        <img
            className={
                hoodAction === 'OPEN_HOOD' ?
                styles.active :
                styles.normal
            }
            style={
                arrowVisibility === 'HIDE_ARROW' ?
                    showDataStyles :
                    null
            }
            width="104"
            height="77"
            src="src/images/show-data.png" />
    )
};

export default ShowData;