import infoSaga from './info-saga';

import { spawn } from 'redux-saga/effects';

export default function* rootSaga() {
	yield spawn(infoSaga);
};