
// import necessary react testing library helpers here
import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter/>);
  // Render the Counter component here
});

test('renders counter message', () => {
  const counterMess = screen.getByText('Counter');
  expect(counterMess).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  const counterInit = screen.getByText('0');
  expect(counterInit).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  const incButton = screen.getByText('+');
  fireEvent.click(incButton);
  incButton.click();
  const updatedVal = screen.getByTestId('count');
  const countValue = updatedVal.textContent;
  console.log(`The current count is: ${countValue}`);
  expect(updatedVal).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  const decButton = screen.getByText('-');
  fireEvent.click(decButton);
  const updatedVal = screen.getByTestId('count');
  const countValue = updatedVal.textContent;
  console.log(`The current count is: ${countValue}`);
  expect(updatedVal).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});
