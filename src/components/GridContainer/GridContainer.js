import styles from './GridContainer.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AgGridReact} from 'ag-grid-react';
import './src/agGridStyles/ag-grid.css';
import './src/agGridStyles/theme-dark.css';
import ColDefFactory from './src/ColDefFactory';
import { changeGridDataQuery } from '../../actions';

const mapStateToProps = (state) => {
    return {
        data: state.chartData.gridData.data
    }
};

class GridContainer extends Component {
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }
    componentWillUpdate() {
        if (!this.api) {
            return;
        }
        this.api.refreshView();
    }
    componentWillUnmount() {
        this.api.destroy();
    }
    componentWillMount() {
        this.columnDefs = new ColDefFactory().createColDefs();
    }
    render() {
        const data = this.props.data || [];
        const gridGroupStyle = {
            height: '100%'
        };
        const { dispatch } = this.props;
        const dataSource = {
            rowCount: null,
            pageSize: 50,
            overflowSize: 50,
            maxConcurrentRequests: 2,
            maxPagesInCache: 2,
            getRows: function(params) {
                dispatch(changeGridDataQuery());
                params.successCallback(data);
            }
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
                        //virtualPaging="true"
                        //datasource={dataSource}
                        rowData={data}
                    />
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(GridContainer);