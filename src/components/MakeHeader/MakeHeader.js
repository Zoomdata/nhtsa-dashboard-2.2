import styles from './MakeHeader.css';

import React from 'react';

const MakeHeader = ({hideOverlay}) => {
    const makeHeaderStyle = {
        zIndex: 1
    };

    return (
        <div
            className={styles.root}
            style={
                hideOverlay ?
                makeHeaderStyle :
                null
            }
        >
            Complaints <br /> by <b>Make</b>
        </div>
    )
};

export default MakeHeader;