import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

let AppComponent;

defineFeature(feature, test => {

  test('When user hasn\'t specified a number, 32 events are shown by default.', async ({ given, when, then }) => {
    given('user hasn\'t specified a number of events', () => {

    });

    when('the user opens the app', () => {
      AppComponent = render(<App />)
    });

    then('the user should see a list of thirty-two events', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test('User can change the number of events displayed', ({ given, when, then }) => {
    given('the main page is open', () => {
      AppComponent = render(<App />)
    });

    let AppDOM
    when('user changes the number in the \'number of events\' input', async () => {
      AppDOM = AppComponent.container.firstChild;
      const numberInput = AppDOM.querySelector('.number-input')
      const user = userEvent.setup();
      await user.type(numberInput, '{backspace}{backspace}10');
      expect(numberInput.value = 10)
    });

    then('the number of events displayed should change accordingly', async () => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(10);
      });
    });
  });


});