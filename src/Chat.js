import React from 'react';
import store from './STORE';
import './Chat.css';

export default function listChatEvents(props) {   
      
  if (props.type === 'message') {  
    return (      
      <div>
        <h2>{store.participants.find(user => user.id === props.id).name}</h2>
            <p className='message'> {`${props.message} at ${new Date(props.timestamp)}`} </p>
      </div>
    )
  } else {    
    return (
    <div>
      <h2>
        {store.participants.find(user => user.id === props.id).name}
        {/* {store.participants.find(user=> user.id === props.id).name} */}
      </h2>
      <p>{`${props.type} on ${new Date(props.timestamp)}`}</p>
    </div>
    )
  }


}