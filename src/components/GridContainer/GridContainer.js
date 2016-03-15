import styles from './GridContainer.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import './src/agGridStyles/theme-dark.css';
import ColDefFactory from './src/ColDefFactory';
import { changeGridDataQuery } from '../../actions';
import { getWidth, getHeight } from '../../utilities';
import { gridDetails } from '../../config/app-constants';

const mapStateToProps = (state) => {
    return {
        data: state.chartData.gridData.data
    }
};

class GridContainer extends Component {
    onGridReady(params) {
        const { dispatch } = this.props;
        this.api = params.api;
        this.columnApi = params.columnApi;
        const gridBody = document.getElementsByClassName('ag-body-viewport')[0];
        gridBody.addEventListener('scroll', function() {
            if (gridBody.scrollHeight - getHeight(gridBody) - gridBody.scrollTop < 200 && gridDetails.hasNextDetails && !gridDetails.loadingDetails) {
                dispatch(changeGridDataQuery());
            }
        });
    }
    componentDidUpdate() {
        if (!this.api) {
            return;
        }
        const data = this.props.data;
        this.api.setRowData(data);
        this.api.sizeColumnsToFit()
    }
    componentWillUnmount() {
        this.api.destroy();
    }
    componentWillMount() {
        this.columnDefs = new ColDefFactory().createColDefs();
    }
    render() {
        const gridGroupStyle = {
            height: '100%'
        };
        return (
            <div
                className={styles.root}
            >
                <div
                    className="ag-dark"
                    style={gridGroupStyle}
                >
                    <AgGridReact
                        onGridReady={this.onGridReady.bind(this)}
                        columnDefs={this.columnDefs}
                        enableSorting="false"
                        enableFilter="false"
                        headerHeight="55"
                        rowHeight="28"
                        suppressRowClickSelection="true"
                        suppressCellSelection="true"
                    />
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(GridContainer);