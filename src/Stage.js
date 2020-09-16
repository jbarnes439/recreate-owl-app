import React from 'react';
import store from './STORE';
import Participant from './Participants';
import './Stage.css';



export default function listStageParticipants(props) {
  
  
  return (
    <div className='Stage'>      
      <div className='participant'>
        {store.stageArray.map(participant => (
          <Participant 
            key={participant.id}
            name={participant.name}
            avatar={participant.avatar}
            inSession={participant.inSession}
            onStage={participant.OnStage}
          />          
        ))}
      </div>
    </div>
  )
}