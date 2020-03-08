import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactCard from '../components/atoms/ContactCard';

import { contact } from '../__mocks__/contacts';

const props = {
  contact,
  selected: false,
  onClickHandler: jest.fn(),
  onCloseHandler: jest.fn(),
};

test('<ContactCard />', () => {
  const { getByText } = render(<ContactCard {...props} />);

  const contactName = getByText(props.contact.fullName);

  fireEvent.click(contactName);
  expect(props.onClickHandler).toHaveBeenCalledTimes(1);
});

test('simulate the close event', () => {
  const closeEventProps = {
    ...props,
    selected: true,
  };

  const { getByText } = render(<ContactCard {...closeEventProps} />);
  expect(getByText(props.contact.email)).toBeInTheDocument();

  const closeButton = getByText(/x/);

  fireEvent.click(closeButton);
  expect(closeEventProps.onCloseHandler).toHaveBeenCalledTimes(1);
});
