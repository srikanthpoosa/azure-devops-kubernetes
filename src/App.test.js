import { render, screen } from '@testing-library/react';
import App from './App.test';

test('renders app title', () => {
  render(<App />);
  const textElement = screen.getByText(/react/i);
  expect(textElement).toBeInTheDocument();
});