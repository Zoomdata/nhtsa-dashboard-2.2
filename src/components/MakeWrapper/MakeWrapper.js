import styles from './MakeWrapper.css';

import React , { Component } from 'react';
import MakeHeader from '../MakeHeader/MakeHeader';
import MakeBarChart from '../MakeBarChart/MakeBarChart';
import { getWidth, getHeight } from '../../utilities';
import { setMakeWrapperDimensions } from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        browser: state.browser
    }
};

class MakeWrapper extends Component {
    setDimensions(comp) {
        if (comp !== null) {
            const { dispatch } = this.props;
            const el = comp;
            const rect = el.getBoundingClientRect();
            const makeWrapperDimensions = {
                width: getWidth(el),
                height: getHeight(el),
                offsetTop: rect.top + document.body.scrollTop,
                offsetLeft: rect.left + document.body.scrollLeft
            }
            const { width, height, offsetTop, offsetLeft } = makeWrapperDimensions;
            dispatch(setMakeWrapperDimensions(width, height, offsetTop, offsetLeft));
        }
    }
    render() {
        const { hideOverlay } = this.props;
        return (
            <div
                className={styles.root}
                ref={comp => {
                    this.setDimensions(comp)
                }}
            >
                <MakeHeader />
                <MakeBarChart />
            </div>
        )
    }
}

export default connect(mapStateToProps)(MakeWrapper);
