import { render, screen } from '@testing-library/react';
import Calculator from './calculator.js';

test('renders heading', () => {
  render(<Calculator/>);
  const linkElement = screen.getByText('Calculator');
  expect(linkElement).toBeInTheDocument();
});

test('renders image', () => {
  render(<Calculator/>);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'image');
});

test('renders number one button', () => {
let result = render(<Calculator />);
  const linkElement = result.container.querySelector('#number-one');
  expect(linkElement).toBeInTheDocument(linkElement);
});

test('Renders  all buttons on the page', async() => {
  render(<Calculator />);
  const linkElement =  await screen.findAllByRole('button');
  expect(linkElement).toHaveLength(13);
})