import styles from './ShowData.css';

import React, { Component } from 'react';

export default class ShowData extends Component {
    render() {
        const hoodAction = this.props.hoodAction;
        return <img className={hoodAction === 'OPEN_HOOD' ? styles.active : styles.normal}
                    width="104" height="77" src="src/images/show-data.png" />
    }
}