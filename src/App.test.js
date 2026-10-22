import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the homepage at /', () => {
  render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
  expect(screen.getByText(/helping support aging loved ones/i)).toBeInTheDocument();
});

test('redirects unknown paths to the homepage', () => {
  render(<MemoryRouter initialEntries={['/homepage']}><App /></MemoryRouter>);
  expect(screen.getByText(/helping support aging loved ones/i)).toBeInTheDocument();
});
