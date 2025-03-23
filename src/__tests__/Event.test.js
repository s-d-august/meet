import React from 'react';
import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';
import Event from '../components/Event';

describe('<Event /> component (details hidden)', () => {
  let EventListComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventListComponent = render(<Event event={allEvents[0]} />);
  });

  test('renders event title', () => {
    const event = allEvents[0];
    expect(EventListComponent.queryByText(event.summary)).toBeInTheDocument();
  });

  test('renders event start time', () => {
    const event = allEvents[0];
    expect(EventListComponent.queryByText(event.created)).toBeInTheDocument();
  });

  test('renders event location', () => {
    const event = allEvents[0];
    expect(EventListComponent.queryByText(event.location)).toBeInTheDocument();
  });

  test('renders event details button with the title "show details"', () => {
    expect(EventListComponent.queryByText("show details")).toBeInTheDocument();
  });
});