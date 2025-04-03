Feature: Specify number of events

 Scenario: When user hasn't specified a number, 32 events are shown by default.
  Given user hasn't specified a number of events
  When the user opens the app
  Then the user should see a list of thirty-two events

 Scenario: User can change the number of events displayed
  Given the main page is open
  When user changes the number in the 'number of events' input
  Then the number of events displayed should change accordingly