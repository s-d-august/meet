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

})