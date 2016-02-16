import styles from './ArrowBottom.css';

import React from 'react';

export default function ArrowBottom(
    props
) {
    const { hoodAction } = props;
    return (
        <div
            className={
                hoodAction === 'OPEN_HOOD' ?
                styles.active :
                styles.normal
            }
        >
        </div>
    )
}
