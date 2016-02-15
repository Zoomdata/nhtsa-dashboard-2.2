import styles from './AboutButton.css';

import React, { Component } from 'react';
import { setAboutVisibilityOption } from '../../actions';

export default class AboutButton extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { store } = this.context;
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
                        store.dispatch(setAboutVisibilityOption('OPEN_ABOUT'));
                    }
                }
            />
        )
    }
}

AboutButton.contextTypes = {
    store: React.PropTypes.object
}