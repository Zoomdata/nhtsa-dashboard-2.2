import styles from './MakeWrapper.css';

import React , { Component } from 'react';
import MakeHeader from '../MakeHeader/MakeHeader';
import MakeBarChart from '../MakeBarChart/MakeBarChart';
import { getWidth, getHeight } from '../../utilities';
import { setMakeWrapperDimensions } from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        hideOverlay: state.hideOverlay
    }
}

class MakeWrapper extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        const el = this.refs.makeWrapper;
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
    render() {
        const { hideOverlay } = this.props;
        return (
            <div
                className={styles.root}
                ref="makeWrapper">
                <MakeHeader hideOverlay={hideOverlay} />
                <MakeBarChart hideOverlay={hideOverlay} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(MakeWrapper);
