import styles from './Annotation.css';

import React, { Component } from 'react';

export default class Annotation extends Component {
    render() {
        return <div className={styles.root}>
            <div>
                Made by <img width="109" height="40" src="src/images/ZoomdataLogo.png" />
            </div>
            <div>
                With Data From <img width="69" height="39" src="src/images/NHTSALogo.png" />
            </div>
        </div>
    }
}