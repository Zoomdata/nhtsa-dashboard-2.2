import styles from './Tabs.css';

import React, { Component } from 'react';
import TabLinks from '../TabLinks/TabLinks';
import TabContent from '../TabContent/TabContent';

export default class Tabs extends Component {
    render() {
        return <div className={styles.root}>
            <TabLinks tab={this.props.tab}
                      onSetActiveTab={this.props.onSetActiveTab} />
            <TabContent tab={this.props.tab}/>
        </div>
    }
}