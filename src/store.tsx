import { createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import { reducer } from "./Store/Combinereducer/Combinereducer";
import { Rootsaga } from "./Store/Rootsaga/Rootsaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Rootsaga);

export default store;
