import styles from './AboutButton.css';

import React from 'react';
import { setAboutVisibilityOption } from '../../actions';
import { connect } from 'react-redux';
import image from '../../images/about-button.png';

const AboutButton = ({dispatch}) => {
    return (
        <img
            className={
                styles.root
            }
            width="119"
            height="28.5"
            src={image}
            onClick={
                (e) => {
                    e.stopPropagation();
                    dispatch(setAboutVisibilityOption('OPEN_ABOUT'));
                }
            }
        />
    )
};

export default connect()(AboutButton);