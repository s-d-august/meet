// src/components/Event.jsx
import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = (boolean) => () => {
    setShowDetails(boolean);
  };

  return (
    <li>
      <h2>{event.summary}</h2>
      <p>{event.created}</p>
      <p>{event.location}</p>
      {!showDetails ? (
        <button onClick={handleClick(true)}>show details</button>
      ) : (
        <div>
          <h3>About event:</h3>
          <a href={event.htmlLink}></a>
          <p>{event.description}</p>
          <button onClick={handleClick(false)}>hide details</button>
        </div>
      )}
    </li>
  );
};

export default Event;