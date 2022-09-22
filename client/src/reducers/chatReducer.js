import ACTION_TYPES from '../actions/index';

import produce from 'immer';

const initialState = {
  isFentcing:false,
  error:null,
  message:[]
}

export default function chatReducer(state=initialState,action){
  switch(action.type){
    case ACTION_TYPES.GET_MESSAGE_REQUEST:
    case ACTION_TYPES.CREATE_MESSAGE_REQUEST:{
       return produce(  state, (draftState)=>{
        draftState.isFentcing =true;
       })
    }

    case ACTION_TYPES.GET_MESSAGE_ERROR:
    case ACTION_TYPES.CREATE_MESSAGE_ERROR:{
      const{
        payload:{ error },
      }=action;
      return produce(state, (draftState)=>{
        draftState.isFentcing =false;
        draftState.error = error;
      })
    }

    case ACTION_TYPES.GET_MESSAGE_SUCCESS:{
      const{
        payload:{messages},
      }=action;
      return produce(state, (draftState)=>{
        draftState.isFentcing =false;
        draftState.message.push(...messages);
      })
    }
    case ACTION_TYPES.CREATE_MESSAGE_SUCCESS:{
      const{
        payload:{message},
      }=action;
      return produce(state, (draftState)=>{
        draftState.isFentcing =false;
        draftState.message.push(...message);
      })
    }
    
    default:{
      return state;
    }
  }
}
