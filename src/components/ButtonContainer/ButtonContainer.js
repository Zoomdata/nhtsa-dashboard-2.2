import styles from './ButtonContainer.css';

import React, { Component, Animated } from 'react';
import Top from '../Top/Top';
import ShowData from '../ShowData/ShowData';
import ArrowBottom from '../ArrowBottom/ArrowBottom';
import Bottom from '../Bottom/Bottom';
import Cover from '../Cover/Cover';

export default class ButtonContainer extends Component {
    render() {
        const newTop = this.props.dashboardProps.height - 67;
        const buttonContainerStyle = {
            top: newTop
        }
        return <div className={styles.root}
                    style={buttonContainerStyle}
                    onClick={(e)=>this.setHoodAction(e)}>
            <Top />
            <ShowData hoodAction={this.props.hoodAction} />
            <ArrowBottom hoodAction={this.props.hoodAction} />
            <Bottom />
            <Cover />
        </div>
    }
    setHoodAction(e) {
        e.stopPropagation();
        this.props.onSetHoodAction('OPEN_HOOD');
    }
}