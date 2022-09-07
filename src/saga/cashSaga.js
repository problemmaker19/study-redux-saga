import {put, takeEvery} from 'redux-saga/effects';
import {addCashAction, getCashAction} from "../store/cashReducer";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* addCashWorker() {
    yield delay(1000)
    yield put(addCashAction(5))
}

function* getCashWorker() {
    yield delay(1000)
    yield put(getCashAction(5))
}

export function* cashWatcher() {
    yield takeEvery('ASYNC_ADD_CASH', addCashWorker)
    yield takeEvery('ASYNC_GET_CASH', getCashWorker)

}