import React from 'react';
import { render } from '@testing-library/react';
import Event from '../components/Event';
import { getEvents } from '../api';


describe('<Event /> component (details hidden)', () => {

  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event />)
  })

  test('renders event title', async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event events={allEvents} />);
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('renders event start time', async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event events={allEvents} />);
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test('renders event location', async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event events={allEvents} />);
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('renders event details button with the title "show details"', () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

})