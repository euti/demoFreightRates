import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Search bar', () => {
  const app = render(<App />);
  expect(app.container.querySelector("#search")).toBeInTheDocument();
  expect(app.container.querySelector("#origin")).toBeInTheDocument();
  expect(app.container.querySelector("#destination")).toBeInTheDocument();
  expect(app.container.querySelector("#freightMode")).toBeInTheDocument();
  expect(app.container.querySelector("#pickupDate")).toBeInTheDocument();
});

test('renders without results', () => {
  const app = render(<App />);
  expect(app.container.querySelector("#dataTable")).not.toBeInTheDocument();
});

test('renders results after searching', () => {
  const app = render(<App />);
  fireEvent.click(app.container.querySelector("#searchButton"))
  expect(app.container.querySelector("#dataTable")).toBeInTheDocument();
});
