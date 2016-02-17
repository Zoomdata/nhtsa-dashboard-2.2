import styles from './CloseAboutButton.css';

import React, { Component } from 'react';
import { setAboutVisibilityOption } from '../../actions';
import { connect } from 'react-redux';

const CloseAboutButton = ({dispatch}) => {
    return (
        <div
            className={
                styles.root
            }
            onClick={
                (e) => {
                    e.stopPropagation();
                    dispatch(setAboutVisibilityOption('CLOSE_ABOUT'));
                }
            }
        >Return
        </div>
    )
};

export default connect()(CloseAboutButton);
