import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

//this is to skip the ci

test('renders app title', () => {
  render(<App />);
  const textElement = screen.getByText(/react/i);
  expect(textElement).toBeInTheDocument();
});