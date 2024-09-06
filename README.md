**MEET APP

A serverless PWA built with React using test-driven development. It utilizes the Google Calendar API to fetch upcoming events, which the user can organize by city. 

***Feature 1
As a user, I should be able to filter events by city so, that I can see a list of events taking place in that city. 

  Scenario 1
  When user hasn’t searched for a specific city, show upcoming events from all cities.

    Given user hasn’t searched for any city;
    When the user opens the app;
    Then the user should see a list of upcoming events.

  Scenario 2
  User should see a list of suggestions when they search for a city.

    Given the main page is open;
    When user starts typing in the city textbox;
    Then the user should receive a list of cities (suggestions) that match what they’ve typed.

  Scenario 3
  User can select a city from the suggested list.

    Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
    When the user selects a city (e.g., “Berlin, Germany”) from the list;
    Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

***Feature 2
As a user, I should be able to show/hide event details, so that only the details for the events that interest me are displayed.

  Scenario 1
  An event element is collapsed by default.

    Given user has selected a city;
    When the user sees the list of events elements;
    Then all event elements should be collapsed.

  Scenario 2
  User can expand an event to see details.

    Given the user is viewing the event list;
    When user selects an event;
    Then the event should expand to show all the details.

  Scenario 3
  User can collapse an event to hide details.

    Given user has an event expanded to show details;
    When the user clicks the collapse button;
    Then event should collapse and hide details.

***Feature 3
  As a user, I should be able to specify the number of events displayed, so that I can choose how many or few I want to see at once.

  Scenario 1
  When user hasn’t specified a number, 32 events are shown by default.

    Given user hasn't changed the number of events to display;
    When the user selects a city;
    Then 32 events should be displayed.

  Scenario 2
  User can change the number of events displayed.

    Given the user is viewing the event list;
    When user specifies a number of events to display;
    Then the list should display that many events.

***Feature 4
  As a user, I should be able to use the app when offline, so that I can still use it even when I can't connect to the internet.

  Scenario 1
  Show cached data when there’s no internet connection.

    Given user is offline;
    When the user interacts with the app;
    Then the cached data should be displayed.

  Scenario 2
  Show error when user changes search settings (city, number of events)..

    Given the user is offline;
    When user attempts to change search settings;
    Then an error message should be displayed.

***Feature 5 
  As a user, I should be able to add an app shortcut to the home screen, so that I can access the app conveniently.

  Scenario 1
  User can install the meet app as a shortcut on their device home screen.

    Given user does not already have a shortcut to the app on their home screen;
    When the user selects to install the shortcut;
    Then a shortcut to the app should be added to the home screen.

***Feature 6
  As a user, I should be able to display charts visualizing event details, so that I can get an overview of the statistics at a glance.
  
  Scenario 1
  Show a chart with the number of upcoming events in each city.

    Given user does not have a city selected;
    When the user is on the search page;
    Then a chart should be displayed with the number of events per city.