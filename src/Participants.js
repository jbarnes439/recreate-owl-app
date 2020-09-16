
import React from 'react';
import './participants.css'


export default function listParticipants(props) {
     


  return (    
      <section>
        <div className='Participants-name'>
        {props.name}
       </div>
      <img src={props.avatar} alt='avatar'/>
      </section>
  )
}

