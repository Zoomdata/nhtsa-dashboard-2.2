import styles from './MakeHeader.css';

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        hideOverlay: state.hideOverlay
    }
};

const MakeHeader = ({hideOverlay}) => {
    const makeHeaderStyle = {
        zIndex: 1
    };
    return (
        <div
            className={styles.root}
            style={
                hideOverlay ? makeHeaderStyle : null
            }
        >
            Complaints <br /> by <b>Make</b>
        </div>
    )
};

export default connect(mapStateToProps)(MakeHeader);