import { connect } from 'react-redux';
import AboutBlock from '../../components/AboutBlock/AboutBlock';

const mapStateToProps = (state) => {
    return {
        aboutVisibility: state.aboutVisibility
    }
};

export const AboutBlockContainer = connect(mapStateToProps)(AboutBlock);