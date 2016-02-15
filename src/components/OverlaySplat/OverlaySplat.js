import styles from './OverlaySplat.css'
import MakeWrapper from '../MakeWrapper/MakeWrapper';

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default class OverlaySplat extends Component {
    componentWillUpdate() {
        setTimeout(function() {
            const el = this.refs.overlaySplat;
            const offsetWidth = el.offsetWidth;
            const paddingLeft = parseFloat(getComputedStyle(el).getPropertyValue('padding-left'));
            const paddingRight = parseFloat(getComputedStyle(el).getPropertyValue('padding-right'));
            const borderLeft = parseFloat(getComputedStyle(el).getPropertyValue('border-left-width'));
            const borderRight = parseFloat(getComputedStyle(el).getPropertyValue('border-right-width'));
            if (this.props.overlaySplatProps.offsetWidth !== offsetWidth) {
                this.setProps(offsetWidth, paddingLeft, paddingRight, borderLeft, borderRight);
            }
        }.bind(this), 0);
    }
    render() {
        const image = 'src/images/overlay_splat4.gif';
        const makeWrapperProps = this.props.makeWrapperProps;
        const overlaySplatProps = this.props.overlaySplatProps;
        const overlaySplatStyle = {
            width: (makeWrapperProps.width * 3) + 'px',
            height: (makeWrapperProps.height + 200) + 'px',
            left: (((makeWrapperProps.width / 2) + makeWrapperProps.offsetLeft) - ((overlaySplatProps.offsetWidth - overlaySplatProps.borderLeft - overlaySplatProps.borderRight - overlaySplatProps.paddingLeft - overlaySplatProps.paddingRight) / 2)) + 'px'
        };
        return <img src={image} className={styles.root} style={overlaySplatProps.offsetWidth !== null || overlaySplatProps.offsetWidth > 0 ? overlaySplatStyle : {}} ref="overlaySplat" />
    }
    setProps(offsetWidth, paddingLeft, paddingRight, borderLeft, borderRight) {
        this.props.onSetOverlaySplatProps(offsetWidth, paddingLeft, paddingRight, borderLeft, borderRight)
    }
}