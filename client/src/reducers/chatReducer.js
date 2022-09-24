import ACTION_TYPES from '../actions/index';

import produce from 'immer';

const initialState = {
  isFentcing: false,
  error: null,
  message:[{content:'text test'}],
  user:{}
}

export default function chatReducer(state=initialState,action){
  switch(action.type){
    case ACTION_TYPES.GET_MESSAGE_REQUEST:
    case ACTION_TYPES.CREATE_MESSAGE_REQUEST:{
       return produce(state, (draftState)=>{
        draftState.isFentcing = true;
        draftState.error = null;
       });
    }

    case ACTION_TYPES.GET_MESSAGE_ERROR:
    case ACTION_TYPES.CREATE_MESSAGE_ERROR:{
      const{
        payload:{ error },
      } = action;
      return produce(state, (draftState)=>{
        draftState.isFentcing =false;
        draftState.error = error;
      })
    }

    case ACTION_TYPES.GET_MESSAGE_SUCCESS:{
      const{
        payload: {messages},
      } = action;
      return produce(state, (draftState)=>{
        draftState.isFentcing = false;
        draftState.message.push(...messages.reverse());
        draftState.error = null;
      })
    }
    case ACTION_TYPES.CREATE_MESSAGE_SUCCESS:{
      const{
        payload:{message},
      }=action;
      return produce(state, (draftState)=>{
        draftState.isFentcing =false;
        draftState.message.push(message);
        draftState.error = null;
      })
    }
    
    default: {
      return state;
    }
  }
}
