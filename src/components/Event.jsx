// src/components/Event.jsx
import React from 'react';


const Event = ({event}) => {

  if (!event) {
    return null; // Return null if event is undefined
  }

  return (
    <li>
      <h2>{event.summary}</h2>
      <p>{event.created}</p>
      <p>{event.location}</p>
      <button>show details</button>
    </li>
  );
}


export default Event;