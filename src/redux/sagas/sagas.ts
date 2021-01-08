import {all} from 'redux-saga/effects';
import weatherFetchSaga from "./weatherFetchSaga";

export default function* rootSaga() {
  yield all([
    weatherFetchSaga()
  ])
}