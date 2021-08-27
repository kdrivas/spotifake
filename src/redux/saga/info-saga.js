import {
	getUserInfo as _getUserInfo
} from './../api/spotify_wrapper';

import {
	SET_USER,
	SET_USER_REQUESTED
} from '../actions/info-action';

import {
	put,
	call,
	takeLastest,
	takeEvery
} from 'redux-saga/effects';

function* getUserInfo({payload}){
	const data = yield call(_getUserInfo, payload);
	yield put({type: SET_USER, payload: data});
}

export default function* infoSaga() {
	yield takeLastest(SET_USER_REQUESTED, getUserInfo);
}