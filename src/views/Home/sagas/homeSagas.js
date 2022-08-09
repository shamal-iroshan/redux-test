import callAddCardSaga from './callAddCardSaga';
import callGetCardsSaga from './callGetCardsSaga';
import {takeLatest} from 'redux-saga/effects';
import {homeActions} from '../slice/homeSlice';

export default function* homeSagas() {
    yield takeLatest(homeActions.addCard, callAddCardSaga);
    yield takeLatest(homeActions.getCards, callGetCardsSaga);
}