import styles from './Active.css';

import React from 'react';

const Active = ({
    activeTab,
    chart,
    onClick
}) => {
    const tab = activeTab.split('_')[1].toLowerCase();
    return (
        <li
            className={
                tab === chart ?
                styles.root :
                null
            }
            onClick={
                () => {
                    onClick();
                }
            }>
            <a href={'#' + chart + '-tab'}>
                {chart === 'scatterplot' ?
                    'Failed Components' :
                    'Map'
                }
            </a>
        </li>
    )
};

export default Active;