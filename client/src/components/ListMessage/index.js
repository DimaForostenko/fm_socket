import React,{useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import * as ChatActionCreators from "../../actions/chatActionCreate"



const ListMessage=()=>{
 const {isFetching,error,message} =  useSelector((state) => state.chat)
 const dispatch = useDispatch();
 const {getMessageRequest} = bindActionCreators(
  ChatActionCreators,
  dispatch
 );
 useEffect(()=>{
  getMessageRequest();
 },[]);
 return(
 <section>
  {isFetching && <h2>Loading...</h2>}
  {error && <h2>Error!!!</h2>}
  <ul>
    {message.length>0 &&
  message.map((msg=>(<li key={msg.id}>{msg.content} from {msg.user}</li>))
    )}
  </ul>
</section>
 );
}

export default ListMessage;