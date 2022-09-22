import { put } from "redux-saga/effects";
import * as ChatActionCreaters from "../actions/chatActionCreate";
import * as API from "../api";

export function* getMessagesSaga(action){
  try{
    const{data: { data }}=yield API.getMessages();
    yield put(ChatActionCreaters.getMessageSuccess(data))
  } catch (error) {
    yield put(ChatActionCreaters.getMessageError(error))
  }
}

export function* createMessagesSaga(action) {
  try{
   const{data:{data}} = yield API.createMessage(action.payload.message);
  yield put(ChatActionCreaters.createMessageSuccess(data));
} catch (error) {
  yield put(ChatActionCreaters.createMessageError(error));
}}