import { take, put, call, fork, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as makeData from '../config/queries/makeData';
import * as yearData from '../config/queries/yearData';
import * as modelData from '../config/queries/modelData';
import * as componentData from '../config/queries/componentData';
import * as metricTotalsData from '../config/queries/metricTotalsData';
import * as metricData from '../config/queries/metricData';
import * as stateData from '../config/queries/stateData';
import * as gridData from '../config/queries/gridData';
import { createClient, secure, host, port, path, access_token } from '../config';
import { gridDetails } from '../config/app-constants';
//import find from 'lodash.find';
import mapKeys from 'lodash.mapkeys';
import camelCase from 'lodash.camelcase';

let queryData = [];
let makeQueryRunning, yearQueryRunning, modelQueryRunning, componentQueryRunning, totalsQueryRunning, metricQueryRunning, stateQueryRunning;

function getPreviewEndpointURL() {
    let endpointURL = secure ? 'https://' : 'http://';
    endpointURL += host + ':' + port + path + '/service/stream/preview';
    endpointURL += '?access_token=' + access_token;

    return endpointURL;
}

function fetchRestDataApi(query, state) {
    return new Promise(function(resolve, reject) {
        gridDetails.loadingDetails = true;
        const url = getPreviewEndpointURL();
        query.limit = gridDetails.limit;
        query.offset = gridDetails.offset;
        fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            gridDetails.hasNextDetails = data.hasNext;
            resolve(data.documents.map(function(d) { return mapKeys(d, function(v, k) { return camelCase(k)})}));
            gridDetails.offset += gridDetails.limit;
            gridDetails.loadingDetails = false;
        }).catch(function (err) {
            console.log('Error: ', err);
            gridDetails.loadingDetails = false;
            reject(err);
        });
    });
}

function fetchDataApi(thread, group) {
    var queryGroup = group;
    return new Promise(function(resolve, reject) {
        thread.on('thread:message', function(data) {
            queryData = data;
            resolve(queryData);
        })
        thread.on('thread:notDirtyData', function() {
            if (queryGroup === 'make') {
                makeQueryRunning = false;
            } else if (queryGroup === 'year') {
                yearQueryRunning = false;
            } else if (queryGroup === 'model') {
                modelQueryRunning = false;
            } else if (queryGroup === 'component') {
                componentQueryRunning = false;
            } else if (queryGroup === 'totals') {
                totalsQueryRunning = false;
            } else if (queryGroup === 'metric') {
                metricQueryRunning = false;
            } else if ( queryGroup === 'state') {
                stateQueryRunning = false;
            }
            resolve(queryData);
        });
        thread.on('thread:exeption', function(error) {
            reject(error);
        })
    })
}

function getQuery(client, source, queryConfig) {
    return client.createQuery(
        {name: source},
        queryConfig
    )
}

function getThread(client, query) {
    return client.run(query);
}

function* fetchMakeData (client, source, queryConfig) {
    makeQueryRunning = true;
    if (!MakeDataQuery) {
        const query = yield call(getQuery, client, source, queryConfig);
        MakeDataQuery = query;
    }
    yield put(actions.requestMakeData(makeData.source));
    if (!MakeDataThread) {
        const thread = yield call(getThread, client, MakeDataQuery);
        MakeDataThread = thread;
    }
    while (makeQueryRunning) {
        const data = yield call(fetchDataApi, MakeDataThread, 'make');
        if (makeQueryRunning) {
            yield put(actions.receiveMakeData(data));
        }
    }
}

function* fetchYearData (client, source, queryConfig) {
    yearQueryRunning = true;
    if (!YearDataQuery) {
        const query = yield call(getQuery, client, source, queryConfig);
        YearDataQuery = query;
    }
    yield put(actions.requestYearData(yearData.source));
    if (!YearDataThread) {
        const thread = yield call(getThread, client, YearDataQuery);
        YearDataThread = thread;
    }
    while (yearQueryRunning) {
        const data = yield call(fetchDataApi, YearDataThread, 'year');
        if (yearQueryRunning) {
            yield put(actions.receiveYearData(data));
        }
    }
}

function* fetchModelData (client, source, queryConfig) {
    modelQueryRunning = true;
    if (!ModelDataQuery) {
        const query = yield call(getQuery, client, source, queryConfig);
        ModelDataQuery = query;
    }
    yield put(actions.requestModelData(modelData.source));
    if (!ModelDataThread) {
        const thread = yield call(getThread, client, ModelDataQuery);
        ModelDataThread = thread;
    }
    while (modelQueryRunning) {
        const data = yield call(fetchDataApi, ModelDataThread, 'model');
        if (modelQueryRunning) {
            yield put(actions.receiveModelData(data));
        }
    }
}

function* changeModelDataQuery(getState) {
    while(true) {
        const source = getState().chartData.modelData.source;
        yield take(actions.CHANGE_MODEL_DATA_QUERY);
        yield fork(fetchModelData, ModelDataThread);
    }
}

function* fetchComponentData (client, source, queryConfig) {
    componentQueryRunning = true;
    if (!ComponentDataQuery) {
        const query = yield call(getQuery, client, source, queryConfig);
        ComponentDataQuery = query;
    }
    yield put(actions.requestComponentData(componentData.source));
    if (!ComponentDataThread) {
        const thread = yield call(getThread, client, ComponentDataQuery);
        ComponentDataThread = thread;
    }
    while (componentQueryRunning) {
        const data = yield call(fetchDataApi, ComponentDataThread, 'component');
        if (componentQueryRunning) {
            yield put(actions.receiveComponentData(data));
        }
    }
}

function* changeComponentDataQuery(getState) {
    while(true) {
        const source = getState().chartData.componentData.source;
        yield take(actions.CHANGE_COMPONENT_DATA_QUERY);
        yield fork(fetchComponentData, ComponentDataThread);
    }
}

function* fetchMetricTotalsData (client, source, queryConfig) {
    totalsQueryRunning = true;
    if (!MetricTotalsDataQuery) {
        const query = yield call(getQuery, client, source, queryConfig);
        MetricTotalsDataQuery = query;
    }
    yield put(actions.requestMetricTotalsData(metricTotalsData.source));
    if (!MetricTotalsDataThread) {
        const thread = yield call(getThread, client, MetricTotalsDataQuery);
        MetricTotalsDataThread = thread;
    }
    while (totalsQueryRunning) {
        const data = yield call(fetchDataApi, MetricTotalsDataThread, 'totals');
        if (totalsQueryRunning) {
            yield put(actions.receiveMetricTotalsData(data));
        }
    }
}

function* fetchMetricData (client, source, queryConfig) {
    metricQueryRunning = true;
    if (!MetricDataQuery) {
        const query = yield call(getQuery, client, source, queryConfig);
        MetricDataQuery = query;
    }
    yield put(actions.requestMetricData(metricData.source));
    if (!MetricDataThread) {
        const thread = yield call(getThread, client, MetricDataQuery);
        MetricDataThread = thread;
    }
    while (metricQueryRunning) {
        const data = yield call(fetchDataApi, MetricDataThread, 'metric');
        if (metricQueryRunning) {
            yield put(actions.receiveMetricData(data));
        }
    }
}

function* changeMetricDataQuery(getState) {
    while(true) {
        const source = getState().chartData.metricData.source;
        yield take(actions.CHANGE_METRIC_DATA_QUERY);
        yield fork(fetchMetricData, MetricDataThread);
    }
}


function* fetchStateData (client, source, queryConfig) {
    stateQueryRunning = true;
    if (!StateDataQuery) {
        const query = yield call(getQuery, client, source, queryConfig);
        StateDataQuery = query;
        const filterState = yield select(state => state.chartFilters);
        if (filterState.make) {
            StateDataQuery.filters.add({
                path: 'make',
                operation: 'IN',
                value: [filterState.make]
            });
        }
        if (filterState.model) {
            StateDataQuery.filters.add({
                path: 'model',
                operation: 'IN',
                value: [filterState.model]
            });
        }
        if (filterState.year) {
            StateDataQuery.filters.add({
                path: 'year',
                operation: 'IN',
                value: filterState.year
            });
        }
    }
    yield put(actions.requestStateData(stateData.source));
    if (!StateDataThread) {
        const thread = yield call(getThread, client, StateDataQuery);
        StateDataThread = thread;
    }
    while (stateQueryRunning) {
        const data = yield call(fetchDataApi, StateDataThread, 'state');
        if (stateQueryRunning) {
            yield put(actions.receiveStateData(data));
        }
    }
}

function* changeStateDataQuery(getState) {
    while(true) {
        const source = getState().chartData.stateData.source;
        yield take(actions.CHANGE_STATE_DATA_QUERY);
        yield fork(fetchStateData, StateDataThread);
    }
}

function* fetchGridData(client, source, query) {
    const gridState = yield select(state => state.chartData.gridData);
    if (!GridDataQuery) {
        GridDataQuery = query;
    }
    if (!GridDataSourceId) {
        const querySource = yield call(client.sources.find, {name: source});
        GridDataSourceId = querySource.id;
        gridData.queryConfig.streamSourceId = GridDataSourceId;
    }
    yield put(actions.requestGridData(gridData.source));
    const data = yield call(fetchRestDataApi, GridDataQuery, gridState);
    yield put(actions.receiveGridData(data));
}

function* changeGridDataQuery(getState) {
    while(true) {
        const source = getState().chartData.gridData.source;
        yield take(actions.CHANGE_GRID_DATA_QUERY);
        yield fork(fetchGridData);
    }
}

function* startup(client) {
    yield fork(fetchMakeData, client, makeData.source, makeData.queryConfig);
    yield fork(fetchYearData, client, yearData.source, yearData.queryConfig);
    yield fork(fetchModelData, client, modelData.source, modelData.queryConfig);
    yield fork(fetchComponentData, client, componentData.source, componentData.queryConfig);
    yield fork(fetchMetricTotalsData, client, metricTotalsData.source, metricTotalsData.queryConfig);
    yield fork(fetchMetricData, client, metricData.source, metricData.queryConfig);
    yield take(actions.SET_HOOD_ACTION);
    yield fork(fetchGridData, client, gridData.source, gridData.queryConfig);
    yield take(actions.SET_ACTIVE_TAB);
    yield fork(fetchStateData, client, stateData.source, stateData.queryConfig);
}

export default function* root(getState) {
    const client = yield call(createClient);
    ZoomdataClient = client;
    yield call(client.sources.update, {name: 'Vehicle Complaints'})
    yield fork(startup, ZoomdataClient);
    yield fork(changeModelDataQuery, getState);
    yield fork(changeComponentDataQuery, getState);
    yield fork(changeMetricDataQuery, getState);
    yield take(actions.SET_HOOD_ACTION);
    yield fork(changeGridDataQuery, getState);
    yield take(actions.SET_ACTIVE_TAB);
    yield fork(changeStateDataQuery, getState);
}
export let ZoomdataClient = undefined;
export let MakeDataQuery = undefined;
export let MakeDataThread = undefined;
export let YearDataQuery = undefined;
export let YearDataThread = undefined;
export let ModelDataQuery = undefined;
export let ModelDataThread = undefined;
export let ComponentDataQuery = undefined;
export let ComponentDataThread = undefined;
export let MetricTotalsDataQuery = undefined;
export let MetricTotalsDataThread = undefined;
export let MetricDataQuery = undefined;
export let MetricDataThread = undefined;
export let StateDataQuery = undefined;
export let StateDataThread = undefined;
export let GridDataSourceId = undefined;
export let GridDataQuery = gridData.queryConfig;