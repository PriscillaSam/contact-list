import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LetterButton from '../components/atoms/LetterButton';

test('<LetterButton />', () => {
  const props = {
    text: 'A',
    contactsCount: 0,
    active: false,
    onClickHandler: jest.fn(),
  };

  const { getByText, rerender } = render(<LetterButton {...props} />);
  const contactCount = getByText(/0/);

  expect(contactCount).toBeInTheDocument();
  expect(contactCount).toBeDisabled();

  props.contactsCount = 2;
  rerender(<LetterButton {...props} />);

  expect(contactCount).toBeEnabled();
});

test('simulate onClick event', () => {
  const props = {
    text: 'A',
    contactsCount: 1,
    active: false,
    onClickHandler: jest.fn(),
  };

  const { getByText } = render(<LetterButton {...props} />);
  const button = getByText(props.text);

  fireEvent.click(button);

  expect(props.onClickHandler).toHaveBeenCalledTimes(1);
});
