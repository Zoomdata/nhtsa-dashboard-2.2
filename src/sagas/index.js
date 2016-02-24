import { take, put, call, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import * as makeData from '../config/queries/makeData';
import * as yearData from '../config/queries/yearData';
import { createClient } from '../config';

let queryData = [];

function fetchDataApi(thread) {
    return new Promise(function(resolve, reject) {
        thread.on('thread:message', function(data) {
                queryData = data;
        })
        thread.on('thread:notDirtyData', function() {
            resolve(queryData);
        });
        thread.on('thread:exeption', function(error) {
            reject(error);
        })
    })
}

function getQuery(client, source, queryConfig) {
    return client.createQuery(
        source,
        queryConfig
    )
}

function getThread(client, query) {
    return client.run(query);
}

function* fetchMakeData (client, source, queryConfig) {
    if (!MakeDataQuery) {
        const query = yield call(getQuery, client, source, queryConfig);
        MakeDataQuery = query;
    }
    yield put(actions.requestMakeData(makeData.source));
    if (!MakeDataThread) {
        const thread = yield call(getThread, client, MakeDataQuery);
        MakeDataThread = thread;
    }
    const data = yield call(fetchDataApi, MakeDataThread);
    yield put(actions.receiveMakeData(data));
}

function* fetchYearData (client, source, queryConfig) {
    if (!YearDataQuery) {
        const query = yield call(getQuery, client, source, queryConfig);
        YearDataQuery = query;
    }
    yield put(actions.requestYearData(yearData.source));
    if (!YearDataThread) {
        const thread = yield call(getThread, client, YearDataQuery);
        YearDataThread = thread;
    }
    const data = yield call(fetchDataApi, YearDataThread);
    yield put(actions.receiveYearData(data));
}

//function* changeMakeDataQuery(getState) {
//    while(true) {
//        const source = getState().chartData.makeData.source;
//        yield take(actions.CHANGE_MAKE_DATA_QUERY);
//        yield fork(fetchMakeData, MakeDataThread);
//    }
//}

function* startup(client) {
    yield fork(fetchYearData, client, yearData.source, yearData.queryConfig);
    yield fork(fetchMakeData, client, makeData.source, makeData.queryConfig);
}

export default function* root(getState) {
    const client = yield call(createClient);
    ZoomdataClient = client;
    yield fork(startup, ZoomdataClient);
    //yield fork(changeMakeDataQuery, getState);

}
export let ZoomdataClient = undefined;
export let MakeDataQuery = undefined;
export let MakeDataThread = undefined;
export let YearDataQuery = undefined;
export let YearDataThread = undefined;