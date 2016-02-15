import styles from './CloseAboutButton.css';

import React, { Component } from 'react';

export default class CloseAboutButton extends Component {
    render() {
        return <div className={styles.root}
                    onClick={(e)=>this.setAboutVisibilityOption(e)}>Return</div>
    }
    setAboutVisibilityOption(e) {
        e.stopPropagation();
        this.props.onSetAboutVisibilityOption('CLOSE_ABOUT');
    }
}