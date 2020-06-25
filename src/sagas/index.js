import "regenerator-runtime/runtime";
import { all } from 'redux-saga/effects';
import { characterSaga } from './characterSaga';

export default function* rootSasga() {
    yield all([
        characterSaga()
    ]);
}