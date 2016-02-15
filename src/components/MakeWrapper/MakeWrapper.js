import styles from './MakeWrapper.css';

import React , { Component } from 'react';
import MakeHeader from '../MakeHeader/MakeHeader';
import MakeBarChart from '../MakeBarChart/MakeBarChart';

export default class MakeWrapper extends Component {
    componentDidMount() {
        const el = this.refs.makeWrapper;
        const paddingLeft = parseFloat(getComputedStyle(el).getPropertyValue('padding-left'));
        const paddingRight = parseFloat(getComputedStyle(el).getPropertyValue('padding-right'));
        const paddingTop = parseFloat(getComputedStyle(el).getPropertyValue('padding-top'));
        const paddingBottom = parseFloat(getComputedStyle(el).getPropertyValue('padding-bottom'));
        const borderLeft = parseFloat(getComputedStyle(el).getPropertyValue('border-left-width'));
        const borderRight = parseFloat(getComputedStyle(el).getPropertyValue('border-right-width'));
        const borderTop = parseFloat(getComputedStyle(el).getPropertyValue('border-top-width'));
        const borderBottom = parseFloat(getComputedStyle(el).getPropertyValue('border-bottom-width'));
        const rect = el.getBoundingClientRect();
        const makeWrapperProps = {
            width: el.offsetWidth - paddingLeft - paddingRight - borderLeft - borderRight,
            height: el.offsetHeight - paddingTop - paddingBottom - borderTop - borderBottom,
            offsetTop: rect.top + document.body.scrollTop,
            offsetLeft: rect.left + document.body.scrollLeft
        }
        this.setProps(makeWrapperProps.width, makeWrapperProps.height, makeWrapperProps.offsetTop, makeWrapperProps.offsetLeft);
    }
    render() {
        const chartData = this.props.chartData;
        return <div className={styles.root} ref="makeWrapper">
            <MakeHeader />
            <MakeBarChart chartData={chartData}
                          onChangeMakeDataQuery={this.props.onChangeMakeDataQuery} />
        </div>
    }
    setProps(width, height, offsetTop, offsetLeft) {
        this.props.onSetMakeWrapperProps(width, height, offsetTop, offsetLeft);
    }
}