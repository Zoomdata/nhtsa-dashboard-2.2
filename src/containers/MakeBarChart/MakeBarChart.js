import { connect } from 'react-redux';
import MakeBarChart from '../../components/MakeBarChart/MakeBarChart';

const mapStateToProps = (state) => {
    return {
        data: state.chartData.makeData.data
    }
}

export const MakeBarChartContainer = connect(mapStateToProps)(MakeBarChart);
