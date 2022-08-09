import { configureStore } from "@reduxjs/toolkit";
import homeReducer from '../views/Home/slice/homeSlice';
import createSagaMiddleware from "redux-saga";
import { spawn } from 'redux-saga/effects';
import homeSagas from '../views/Home/sagas/homeSagas';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield spawn(homeSagas);
}

const store = configureStore({
    reducer: {homeReducer: homeReducer},
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;