import styles from './MakeWrapper.css';

import React , { Component } from 'react';
import MakeHeader from '../MakeHeader/MakeHeader';
import { MakeBarChartContainer } from '../../containers/MakeBarChart/MakeBarChart';
import { getWidth, getHeight } from '../../utilities';
import { setMakeWrapperDimensions } from '../../actions';

export default class MakeWrapper extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
        const el = this.refs.makeWrapper;
        const rect = el.getBoundingClientRect();
        const makeWrapperDimensions = {
            width: getWidth(el),
            height: getHeight(el),
            offsetTop: rect.top + document.body.scrollTop,
            offsetLeft: rect.left + document.body.scrollLeft
        }
        const { width, height, offsetTop, offsetLeft } = makeWrapperDimensions;
        store.dispatch(setMakeWrapperDimensions(width, height, offsetTop, offsetLeft));
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const chartData = this.props.chartData;
        return (
            <div
                className={
                    styles.root
                }
                ref="makeWrapper">
                <MakeHeader />
                <MakeBarChartContainer />
            </div>
        )
    }
}

MakeWrapper.contextTypes = {
    store: React.PropTypes.object
}