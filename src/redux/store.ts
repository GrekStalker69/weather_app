import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/sagas";
import userReducer from "./reducers/userReducer";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    user : userReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export default store;