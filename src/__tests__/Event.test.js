import React from 'react';
import { render } from '@testing-library/react';
import { getEvents } from '../api';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';

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

describe('<Event /> component show details function', () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('by default, event details section should be hidden', () => {
    expect(document.querySelector(".eventDescription")).not.toBeInTheDocument();
  });

  test('shows the details section when the user clicks on the "show details" button', async () => {
    const user = userEvent.setup();
    let showDetailsButton = document.querySelector(".details-btn");
    await user.click(showDetailsButton);
    expect(document.querySelector(".eventDescription")).toBeInTheDocument();
  });

  test('hides the details section when the user clicks on the "hide details" button', async () => {
    // Opening details section
    const user = userEvent.setup();
    let showDetailsButton = document.querySelector(".details-btn");
    await user.click(showDetailsButton);

    // Test to make sure the details section opened
    let correctOpen = null;
    if (document.querySelector(".eventDescription")) {
      correctOpen = true;
      console.log("details section opened correctly");
    } else {
      correctOpen = false;
      console.log("details section did not open correctly");
    }

    // Closing details section
    let hideDetailsButton = document.querySelector(".details-btn");
    await user.click(hideDetailsButton);
    let descriptionText = (document.querySelector(".eventDescription"));
    expect(descriptionText).not.toBeInTheDocument();
    expect(correctOpen).toBe(true);
  });
});