import styles from './AboutButton.css';

import React, { Component } from 'react';

export default class AboutButton extends Component {
    render() {
        return <img className={styles.root} width="119" height="28.5" src="src/images/about-button.png"
                    onClick={(e)=>this.setAboutVisibilityOption(e)} />
    }
    setAboutVisibilityOption(e) {
        e.stopPropagation();
        this.props.onSetAboutVisibilityOption('OPEN_ABOUT');
    }
}