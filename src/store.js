import { createStore, applyMiddleware } from "redux";
import combine from "./reducers/";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];
export const store = createStore(
    combine,
    applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga)