import infoSagas from './info_sagas';

import { spawn } from 'redux-saga';

export default function* rootSaga() {
	yield spawn(infoSagas);
};