import React, { Component } from 'react';
import './App.css';
import store from './STORE';
import Participant from './Participants';
import Stage from './Stage';
import Chat from './Chat';



class App extends Component {
  // static default props will go here.


render() {  
  return (
    <main className='App'>
      <div className='participants'>
        {store.inSessionArray.map(participant => (
          <Participant 
            key={participant.id + participant.name}
            id={participant.id}
            name={participant.name}
            avatar={participant.avatar}
            inSession={participant.inSession}
            onStage={participant.OnStage}
          />          
        ))}
      </div>
      <div className='participants'>
        {store.notInSessionArray.map((participant) => (
          <Participant 
            key={participant.id}
            id={participant.id}
            name={participant.name}
            avatar={participant.avatar}
            inSession={participant.inSession}
            onStage={participant.OnStage}
          />          
        ))}
      </div>
      <Stage />
      <div className='chat-box'>
         {store.chatEvents.map(chatEvent => (
           <Chat
            id={chatEvent.participantId}
            key={chatEvent.participantId}
            type={chatEvent.type}
            message={chatEvent.message}
            timestamp={chatEvent.timestamp}
            />
         ))}        
         
      </div>
    </main>
  )
}
}

export default App;
