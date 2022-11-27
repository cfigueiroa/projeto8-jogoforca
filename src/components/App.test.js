// needed for Wallaby.js
import { render } from '@testing-library/react';
import App from './App';

test('benchmark', () => {
  render(<App />);
  expect(true).toBe(true);
});
