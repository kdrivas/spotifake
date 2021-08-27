import infoSaga from './info-saga';

import { spawn } from 'redux-saga';

export default function* rootSaga() {
	yield spawn(infoSagas);
};