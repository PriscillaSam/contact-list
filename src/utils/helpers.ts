export const createUserContact = (contact: IApiResponse, index: number) => {
  return {
    id: index,
    firstName: contact.name.first,
    lastName: contact.name.last,
    fullName: `${contact.name.first} ${contact.name.last}`,
    email: contact.email,
    username: contact.login.username,
    phone: contact.phone,
    street: contact.location.street,
    city: contact.location.city,
    state: contact.location.state,
    postcode: contact.location.postcode,
    avatar: {
      ...contact.picture,
    },
  } as IUserContact;
};

const createAlphabetGrouping = (variant: 'contact' | 'count') => {
  return [...Array(26)].reduce((acc, _, index) => {
    const letter = String.fromCharCode(index + 65);
    if (variant === 'count') {
      acc[letter] = 0;
    } else {
      acc[letter] = {
        contacts: {},
        lastNames: [],
      };
    }
    return acc;
  }, {});
};

export const normalizeContacts = (contacts: IApiResponse[]) => {
  const alphabetMapping = createAlphabetGrouping('contact');
  const alphabetCountMapping = createAlphabetGrouping('count');

  return contacts.reduce(
    (acc, contact, index) => {
      const userContact = createUserContact(contact, index);
      const letterGroup = userContact.lastName[0].toUpperCase();
      const objectIndex = `${userContact.lastName}__${index}`;

      // increase the alphabet count
      alphabetCountMapping[letterGroup] += 1;
      acc[letterGroup].contacts[objectIndex] = userContact;

      return acc;
    },
    alphabetMapping as IContactObject,
  );
};

export const sortNames = (lastNames: string[]) =>
  lastNames.sort((a, b) => (a > b ? 1 : -1));
