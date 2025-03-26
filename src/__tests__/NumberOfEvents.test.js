import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import NumberOfEvents from '../components/NumberOfEvents'

describe('<NumberOfEvents /> component', () => {

  let EventNumberComponent;
  beforeEach(() => {
    EventNumberComponent = render(<NumberOfEvents />)
  })

  test('renders text input', () => {
    const numberInput = EventNumberComponent.queryByRole('spinbutton');
    expect(numberInput).toBeInTheDocument();
    expect(numberInput).toHaveClass('number')
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