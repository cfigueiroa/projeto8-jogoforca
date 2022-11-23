// Needed for Wallaby.js to work
import { render, screen } from '@testing-library/react';
import App from './App';

test('default', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jogo da Forca/i);
  expect(linkElement).toBeInTheDocument();
});
