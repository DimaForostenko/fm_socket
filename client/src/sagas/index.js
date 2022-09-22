import ACTION_TYPES from "../actions";
import { takeEvery } from "redux-saga/effects";
import { createMessagesSaga , getMessagesSaga  } from "./chatSaga";

export default function* rootSaga() {
  yield takeEvery(ACTION_TYPES.CREATE_MESSAGE_REQUEST,createMessagesSaga);
  yield takeEvery(ACTION_TYPES.GET_MESSAGE_REQUEST,getMessagesSaga);
}