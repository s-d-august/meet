Feature: Show/hide event details

 Scenario: An event element is collapsed by default.
  Given the list of events is showing
  When there is an event displayed
  Then the event details should be hidden

 Scenario: User can expand an event to see details.
  Given there is an event displayed
  When user clicks the 'show details' button
  Then the event details should be displayed
  
 Scenario: User can collapse an event to hide details.
  Given there is an event displayed
  And the event details are displayed
  When the user clicks the 'hide details' button
  Then the event details should be hidden