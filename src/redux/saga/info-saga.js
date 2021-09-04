import {
	SET_USER,
	SET_USER_REQUESTED,
	SET_TOKEN,
	SET_TOKEN_REQUESTED,
  SET_PLAYLIST,
  SET_PLAYLIST_REQUESTED,
  SET_WEEKLY,
  SET_WEEKLY_REQUESTED
} from '../actions/info-action';

import {
	put,
	takeLatest,
	takeEvery
} from 'redux-saga/effects';

function* setUserInfo({payload}){
	yield put({type: SET_USER, payload});
}

function* setTokenUser({payload}){
	yield put({type: SET_TOKEN, payload});
}

function* setPlaylistsUser({payload}) {
  yield put({type: SET_PLAYLIST, payload});
}

function* setWeekly({payload}) {
  yield put({type: SET_WEEKLY, payload});
}

export default function* infoSaga() {
	yield takeLatest(SET_USER_REQUESTED, setUserInfo);
	yield takeEvery(SET_TOKEN_REQUESTED, setTokenUser);
  yield takeEvery(SET_PLAYLIST_REQUESTED, setPlaylistsUser);
  yield takeEvery(SET_WEEKLY_REQUESTED, setWeekly);
}