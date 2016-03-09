import styles from './CloseHood.css';

import React from 'react';
import { setHoodAction } from '../../actions';
import { connect } from 'react-redux';
import image from '../../images/close-hood.png';

const CloseHood = ({dispatch}) => {
    return (
        <img
            className={styles.root}
            width="189"
            height="52"
            src={image}
            onClick={
                () => {
                    dispatch(setHoodAction('CLOSE_HOOD'));
                }
            }
        >

        </img>
    )
};

export default connect()(CloseHood);