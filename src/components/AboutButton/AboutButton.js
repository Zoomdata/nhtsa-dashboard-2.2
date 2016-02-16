import styles from './AboutButton.css';

import React from 'react';

export default function AboutButton({
    onClick
}) {
    return (
        <img
            className={
                styles.root
            }
            width="119"
            height="28.5"
            src="src/images/about-button.png"
            onClick={
                (e) => {
                    e.stopPropagation();
                    onClick();
                }
            }
        />
    )
}