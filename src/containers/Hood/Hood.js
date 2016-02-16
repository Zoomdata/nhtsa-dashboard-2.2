import { connect } from 'react-redux';
import { setHoodAction } from '../../actions';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';

const mapStateToProps = (state) => {
    return {
        dashboardDimensions: state.layout.dashboardDimensions,
        hoodAction: state.hoodAction
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(setHoodAction('OPEN_HOOD'));
        }
    }
};

export const Hood = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonContainer);