import { connect } from 'react-redux';
import { setHoodAction, setGridDetailsOffset } from '../../actions';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';
import { gridDetails } from '../../config/app-constants';

const mapStateToProps = (state) => {
    return {
        dashboardDimensions: state.layout.dashboardDimensions,
        hoodAction: state.hoodAction,
        arrowVisibility: state.arrowVisibility
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (hoodAction) => {
            if (hoodAction === 'CLOSE_HOOD') {
                dispatch(setHoodAction('OPEN_HOOD'));
                gridDetails.offset = 0;
                gridDetails.hasNextDetails = true;
            } else {
                dispatch(setHoodAction('CLOSE_HOOD'));
            }
        }
    }
};

export const ButtonContainerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonContainer);