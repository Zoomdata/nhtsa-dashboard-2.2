import styles from './Active.css';

import React, { Component } from 'react';
import { setActiveTab } from '../../actions';

export default class Active extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { store } = this.context;
        const chart = this.props.chart;
        const tab = this.props.tab.split('_')[1].toLowerCase();
        return (
            <li
                className={
                    tab === chart ? styles.root : null
                }
                onClick={
                    () => {
                        const selectedTab = 'SHOW_' + chart.toUpperCase();
                        store.dispatch(setActiveTab(selectedTab));
                    }
                }>
                <a href={'#' + chart + '-tab'}>
                    {chart === 'scatterplot' ? 'Failed Components' : 'Map'}
                </a>
            </li>
        )
    }
}

Active.contextTypes = {
    store: React.PropTypes.object
}