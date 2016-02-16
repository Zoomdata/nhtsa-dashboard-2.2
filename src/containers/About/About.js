import { connect } from 'react-redux';
import { setAboutVisibilityOption } from '../../actions';
import AboutButton from '../../components/AboutButton/AboutButton';

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(setAboutVisibilityOption('OPEN_ABOUT'));
        }
    }
};

export const About = connect(null, mapDispatchToProps)(AboutButton);