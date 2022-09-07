import {all} from 'redux-saga/effects';
import {userWatcher} from "./customerSaga";
import {cashWatcher} from "./cashSaga";

export function* rootWatcher() {
    yield all([userWatcher(), cashWatcher()])
}