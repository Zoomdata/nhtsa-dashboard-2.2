import styles from './AboutBlock.css';

import React from 'react';
import AboutHeader from '../AboutHeader/AboutHeader';
import AboutDescription from '../AboutDescription/AboutDescription';
import ZDWebsiteButton from '../ZDWebsiteButton/ZDWebsiteButton';
import { CloseAboutButton } from '../CloseAboutButton/CloseAboutButton';

export default function AboutBlock({aboutVisibility}) {
    return (
        <div
            className={
                aboutVisibility === 'CLOSE_ABOUT' ?
                styles.normal :
                styles.active
            }>
            <AboutHeader />
            <AboutDescription />
            <a
                target="_blank"
                href="http://zoomdata.com">
                <ZDWebsiteButton />
            </a>
            <CloseAboutButton />
        </div>
    )
}