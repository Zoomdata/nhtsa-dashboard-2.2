import normalize from 'normalize.css'

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {responsiveStoreEnhancer} from 'redux-responsive';
import { runSaga } from 'redux-saga';
import { Provider } from 'react-redux';
import NhtsaApp from './containers/NhtsaApp/NhtsaApp';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = compose(
    responsiveStoreEnhancer,
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}

const store = configureStore();

sagaMiddleware.run(rootSaga);

const root = document.getElementById('root');

render(
    <Provider store={store}>
        <NhtsaApp />
    </Provider>,
    root
);
