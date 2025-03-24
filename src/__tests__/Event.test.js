import React from 'react';
import { render } from '@testing-library/react';
import { getEvents } from '../api';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event'

describe('<Event /> component (details hidden)', () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('renders event title', () => {
    const event = allEvents[0];
    expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
  });

  test('renders event start time', () => {
    const event = allEvents[0];
    expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
  });

  test('renders event location', () => {
    const event = allEvents[0];
    expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
  });

  test('renders event details button with the title "show details"', () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });
});

describe('<Event /> component show detais function', () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('by default, event details section should be hidden', () => {
    const event = allEvents[0];
    expect(EventComponent.queryByText(event.description)).not.toBeInTheDocument();
  });

  test('shows the details section when the user clicks on the "show details" button', async () => {
    const user = userEvent.setup();
    let showDetailsButton = EventComponent.queryByText("show details");
    await user.click(showDetailsButton);
    const event = allEvents[0];
    expect(EventComponent.queryByText(event.description)).toBeInTheDocument();
  });

  test('hides the details section when the user clicks on the "hide details" button', async () => {
    //opening details section
    const user = userEvent.setup();
    let showDetailsButton = EventComponent.queryByText("show details");
    await user.click(showDetailsButton);
    const event = allEvents[0];
    (EventComponent.queryByText(event.description)) && (EventComponent.queryByText("hide details"))
      ? console.log("show details opened properly")
      : console.log("show details didn't open properly");

    //closing details section
    let hideDetailsButton = EventComponent.queryByText("hide details");
    await user.click(hideDetailsButton);
    expect(EventComponent.queryByText(event.description)).not.toBeInTheDocument();
  })
})