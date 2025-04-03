// src/components/Event.jsx
import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = (boolean) => () => {
    setShowDetails(boolean);
  };

  return (
    <li className='event'>
      <h2>{event.summary}</h2>
      <p>{event.created}</p>
      <p className='event-location'>{event.location}</p>
      {!showDetails ? (
        <button className="details-btn" onClick={handleClick(true)}>show details</button>
      ) : (
        <div className='details'>
          <h3>About event:</h3>
          <a href={event.htmlLink}>Event Link</a>
          <p className="eventDescription">{event.description}</p>
          <button className="details-btn" onClick={handleClick(false)}>hide details</button>
        </div>
      )}
    </li>
  );
};

export default Event;