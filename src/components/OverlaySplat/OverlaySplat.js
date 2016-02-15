import styles from './OverlaySplat.css'

import React, { Component } from 'react';
import { getWidth } from '../../utilities';
import { setOverlaySplatDimensions } from '../../actions';

export default class OverlaySplat extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    componentWillUpdate() {
        const { store } = this.context;
        setTimeout(function() {
            const el = this.refs.overlaySplat;
            const width = getWidth(el);
            const { overlaySplatDimensions } = this.props;
            if (overlaySplatDimensions.width !== width) {
                store.dispatch(setOverlaySplatDimensions(width));
            }
        }.bind(this), 0);
    }
    render() {
        const image = 'src/images/overlay_splat4.gif';
        const { makeWrapperDimensions, overlaySplatDimensions } = this.props;
        const overlaySplatStyle = {
            width: (makeWrapperDimensions.width * 3) + 'px',
            height: (makeWrapperDimensions.height + 200) + 'px',
            left: (((makeWrapperDimensions.width / 2) + makeWrapperDimensions.offsetLeft) - (overlaySplatDimensions.width / 2)) + 'px'
        };
        return (
            <img
                src={
                    image
                }
                className={
                    styles.root
                }
                style={
                    overlaySplatDimensions.width !== null ||
                    overlaySplatDimensions.width > 0 ?
                    overlaySplatStyle :
                    {}
                }
                ref="overlaySplat"
            />
        )
    }
}

OverlaySplat.contextTypes = {
    store: React.PropTypes.object
}