import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')

defineFeature(feature, test => {

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the app is open', () => {

    });

    when('there is an event displayed', () => {

    });

    then('the event details should be hidden', () => {

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