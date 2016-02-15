import styles from './BackgroundImage.css';

import React, { Component } from 'react';

export default class BackgroundImage extends Component {
    render() {
        const image = 'src/images/car_background@2x.jpg';
        return <img src={image} className={styles.root}></img>
    }
}