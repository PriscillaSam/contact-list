export const createUserContact = (
  contact: IApiResponse,
  index: number,
): IUserContact => {
  return {
    id: index,
    firstName: contact.name.first,
    lastName: contact.name.last,
    fullName: `${contact.name.first} ${contact.name.last.toUpperCase()}`,
    email: contact.email,
    username: contact.login.username,
    phone: contact.phone,
    street: `${contact.location.street.number} ${contact.location.street.name}`,
    city: contact.location.city,
    state: contact.location.state,
    postcode: contact.location.postcode,
    avatar: {
      ...contact.picture,
    },
  };
};

const createAlphabetGrouping = (variant: 'contact' | 'count') => {
  return [...Array(26)].reduce((acc, _, index) => {
    const letter = String.fromCharCode(index + 65);

    if (variant === 'count') {
      acc[letter] = 0;
    } else {
      acc[letter] = {
        contacts: {},
        ids: [],
      };
    }
    return acc;
  }, {});
};

export const sortContacts = (contacts: IApiResponse[]) =>
  contacts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));

export const normalizeContacts = (contacts: IApiResponse[]) => {
  let contactMapping = createAlphabetGrouping('contact');
  const alphabetCountMapping = createAlphabetGrouping('count');

  contactMapping = sortContacts(contacts).reduce((acc, contact, index) => {
    const userContact = createUserContact(contact, index);
    const letterGroup = userContact.lastName[0].toUpperCase();

    // increase the alphabet count
    alphabetCountMapping[letterGroup] += 1;

    // add contact to the letter group and index to the id array
    acc[letterGroup].contacts[index] = userContact;
    acc[letterGroup].ids.push(index);

    return acc;
  }, contactMapping);

  return { contactMapping, alphabetCountMapping };
};
