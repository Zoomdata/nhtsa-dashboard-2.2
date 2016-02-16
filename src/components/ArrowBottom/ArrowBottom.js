import styles from './ArrowBottom.css';

import React from 'react';

export default function ArrowBottom(
    props,
    { store }
){
    const state = store.getState();
    const { hoodAction } = state;
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

ArrowBottom.contextTypes = {
    store: React.PropTypes.object
}