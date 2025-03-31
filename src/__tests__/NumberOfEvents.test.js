import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import NumberOfEvents from '../components/NumberOfEvents'
import App from '../App';

describe('<NumberOfEvents /> component', () => {

  let EventNumberComponent;
  beforeEach(() => {
    EventNumberComponent = render(<NumberOfEvents
      setCurrentNOE={() => { }} />)
  })

  test('renders text input', () => {
    const numberInput = EventNumberComponent.queryByRole('spinbutton');
    expect(numberInput).toBeInTheDocument();
    expect(numberInput).toHaveClass('number-input')
  })

  test('default value is 32', () => {
    const numberInput = EventNumberComponent.queryByRole('spinbutton');
    expect(numberInput.value = 32)
  })

  test('value changes according to user input', async () => {
    const user = userEvent.setup();
    const numberInput = EventNumberComponent.queryByRole('spinbutton');
    await user.type(numberInput, '{backspace}{backspace}10');
    expect(numberInput.value = 10)
  })

})

describe('<NumberOfEvents /> integration tests', () => {

  test('displays the correct number of events based on user input', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const numberInput = AppComponent.queryByRole('spinbutton');
    expect(numberInput).toBeInTheDocument(); // Ensure the input field exists

    await user.type(numberInput, '{backspace}{backspace}10');

    const suggestionListItems = AppComponent.queryAllByRole('listitem');
    expect(suggestionListItems.length).toBe(10);
  })

})