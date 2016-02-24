import { connect } from 'react-redux';
import { setHoodAction } from '../../actions';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';

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
            hoodAction === 'CLOSE_HOOD' ?
                dispatch(setHoodAction('OPEN_HOOD')) :
                dispatch(setHoodAction('CLOSE_HOOD'));
        }
    }
};

export const ButtonContainerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonContainer);