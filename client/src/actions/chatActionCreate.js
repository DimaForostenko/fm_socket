import ACTION_TYPES from "./index";

export const getMessageRequest = () =>({
  type:ACTION_TYPES.GET_MESSAGE_REQUEST,

})

export const getMessageSuccess = (messages) =>({
  type:ACTION_TYPES.GET_MESSAGE_SUCCESS,
  payload:{messages}
})

export const getMessageError = (error) =>({
  type:ACTION_TYPES.GET_MESSAGE_ERROR,
  payload:{error}
})

export const createMessageRequest = (message) =>({
  type:ACTION_TYPES.GET_MESSAGE_REQUEST,
  payload:{message}
})

export const createMessageSuccess = (message) =>({
  type:ACTION_TYPES.GET_MESSAGE_SUCCESS,
  payload:{message}
})

export const createMessageError = (error) =>({
  type:ACTION_TYPES.GET_MESSAGE_ERROR,
  payload:{error}
})