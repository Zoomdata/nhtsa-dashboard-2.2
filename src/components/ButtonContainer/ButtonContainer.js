import styles from './ButtonContainer.css';

import React, { Component, Animated } from 'react';
import { setHoodAction } from '../../actions';
import Top from '../Top/Top';
import ShowData from '../ShowData/ShowData';
import ArrowBottom from '../ArrowBottom/ArrowBottom';
import Bottom from '../Bottom/Bottom';
import Cover from '../Cover/Cover';

export default class ButtonContainer extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { store } = this.context;
        const newTop = this.props.dashboardDimensions.height - 67;
        const buttonContainerStyle = {
            top: newTop
        }
        return (
            <div
                className={
                    styles.root
                }
                style={
                    buttonContainerStyle
                }
                onClick={
                    (e) => {
                        e.stopPropagation();
                        store.dispatch(setHoodAction('OPEN_HOOD'));
                    }
                }
            >
                <Top />
                <ShowData
                    hoodAction={
                        this.props.hoodAction
                    }
                />
                <ArrowBottom
                    hoodAction={
                        this.props.hoodAction
                    } />
                <Bottom />
                <Cover />
            </div>
        )
    }
}

ButtonContainer.contextTypes = {
    store: React.PropTypes.object
}