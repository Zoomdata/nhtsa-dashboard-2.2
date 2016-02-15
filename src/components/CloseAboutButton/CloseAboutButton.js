import styles from './CloseAboutButton.css';

import React, { Component } from 'react';
import { setAboutVisibilityOption } from '../../actions';

export default class CloseAboutButton extends Component {
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
            <div
                className={
                    styles.root
                }
                onClick={
                    (e) => {
                        e.stopPropagation();
                        store.dispatch(setAboutVisibilityOption('CLOSE_ABOUT'));
                    }
                }
            >Return
            </div>
        )
    }
}

CloseAboutButton.contextTypes = {
    store: React.PropTypes.object
}