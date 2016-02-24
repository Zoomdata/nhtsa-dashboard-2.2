import styles from './CloseHood.css';

import React from 'react';
import { setHoodAction } from '../../actions';
import { connect } from 'react-redux';

const CloseHood = ({dispatch}) => {
    return (
        <img
            className={styles.root}
            width="189"
            height="52"
            src="src/images/close-hood.png"
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