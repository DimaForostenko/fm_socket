import axios from "axios";
import io from "socket.io-client";
import { SOCKET_EVENTS } from "../constants";
import store from "../store";
import * as ChatActionCreaters from "../actions/chatActionCreate";

const baseURL = 'localhost:5000';

const httpClient = axios.create({
  baseURL:`http://${baseURL}`,
});

const socket = io(`ws://${baseURL}`);

export const getMessages = () => httpClient.get('/');

export const createMessage = (message) => socket.emit(SOCKET_EVENTS.NEW_MESSAGE, message);

socket.on(SOCKET_EVENTS.NEW_MESSAGE, message => {
  store.dispatch(ChatActionCreaters.createMessageRequest(message));
})

socket.on(SOCKET_EVENTS.NEW_MESSAGE_ERROR, error => {
  store.dispatch(ChatActionCreaters.createMessageError(error));
})


