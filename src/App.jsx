import React from 'react';
import { useEffect, useState } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api';

const App = () => {

  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <CitySearch />
      <NumberOfEvents />
      <EventList events={events}/>
    </div>
  );
 }


export default App;