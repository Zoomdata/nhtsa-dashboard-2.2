import styles from './ButtonContainer.css';

import React from 'react';
import Top from '../Top/Top';
import ShowData from '../ShowData/ShowData';
import ArrowBottom from '../ArrowBottom/ArrowBottom';
import Bottom from '../Bottom/Bottom';
import Cover from '../Cover/Cover';

const ButtonContainer = ({
    dashboardDimensions,
    hoodAction,
    onClick
}) => {
    const newTop = dashboardDimensions.height - 67;
    const buttonContainerStyle = {
        top: newTop
    }
    return (
        <div
            className={styles.root}
            style={buttonContainerStyle}
            onClick={
                (e) => {
                    e.stopPropagation();
                    onClick();
                }

            }
        >
            <Top />
            <ShowData hoodAction={hoodAction} />
            <ArrowBottom hoodAction={hoodAction}/>
            <Bottom />
            <Cover />
        </div>
    )
};

export default ButtonContainer;
