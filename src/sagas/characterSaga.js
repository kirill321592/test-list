import { call, put, takeEvery } from 'redux-saga/effects';
import { getCharacters, successCharacters, failCharacters } from 'act/character';
import { sendGetRequest } from 'api/makeRequest';
import { API } from 'api/constants';

export function* fetchCharacters() {
    try {
        const characters = yield call(sendGetRequest, API.GET_CHARACTERS);
        yield put(successCharacters(characters));
    } catch (e) {
        yield put(failCharacters());
    }
}

export function* characterSaga() {
    yield takeEvery(getCharacters, fetchCharacters);
}