import styles from './AboutBlock.css';

import React, { Component } from 'react';
import AboutHeader from '../AboutHeader/AboutHeader';
import AboutDescription from '../AboutDescription/AboutDescription';
import ZDWebsiteButton from '../ZDWebsiteButton/ZDWebsiteButton';
import CloseAboutButton from '../CloseAboutButton/CloseAboutButton';

export default class AboutBlock extends Component {
    render() {
        const aboutVisibility = this.props.aboutVisibility;
        return <div className={aboutVisibility === 'CLOSE_ABOUT' ? styles.normal : styles.active}>
            <AboutHeader />
            <AboutDescription />
            <a target="_blank" href="http://zoomdata.com">
                <ZDWebsiteButton />
            </a>
            <CloseAboutButton aboutVisibility={aboutVisibility}
                              onSetAboutVisibilityOption={this.props.onSetAboutVisibilityOption} />
        </div>
    }
}