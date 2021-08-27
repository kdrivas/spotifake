import rootSaga from './sagas';
import rootReducer from './reducers';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'edux-devtools-extension';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
