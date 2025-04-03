Feature: Show/hide event details

 Scenario: An event element is collapsed by default.
  Given there is at least one event displayed
  When the list of events is first rendered
  Then the event details should be hidden

 Scenario: User can expand an event to see details.
  Given there is at least one event displayed
  When user clicks the 'show details' button
  Then the event details should be displayed
  
 Scenario: User can collapse an event to hide details.
  Given there is at least one event displayed
  And the event details are displayed
  When the user clicks the 'hide details' button
  Then the event details should be hidden