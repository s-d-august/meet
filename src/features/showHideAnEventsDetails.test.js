import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')

let AppComponent

defineFeature(feature, test => {

  test('An event element is collapsed by default.', async ({ given, when, then }) => {
    let EventListItems;

    given('the list of events is showing', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    when('there is an event displayed', () => {
      expect(EventListItems[0]).toBeDefined();
      console.log(EventListItems[0])
    });

    then('the event details should be hidden', () => {
      const eventDetails = EventListItems[0].querySelector('.eventDescription');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see details.', ({ given, when, then }) => {
    given('there is an event displayed', () => {

    });

    when('user clicks the \'show details\' button', () => {

    });

    then('the event details should be displayed', () => {

    });
  });

  test('User can collapse an event to hide details.', ({ given, and, when, then }) => {
    given('there is an event displayed', () => {

    });

    and('the event details are displayed', () => {

    });

    when('the user clicks the \'hide details\' button', () => {

    });

    then('the event details should be hidden', () => {

    });
  });
});