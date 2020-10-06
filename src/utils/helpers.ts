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

const createGroupingStructure = () => {
  return [...Array(26)].reduce((acc, _, index) => {
    const letter = String.fromCharCode(index + 65);
    acc[letter] = {
      contacts: {},
      ids: [],
    };
    return acc;
  }, {});
};

export const sortContacts = (contacts: IApiResponse[]) =>
  contacts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));

export const normalizeContacts = (contacts: IApiResponse[]) => {
  let contactsMap = createGroupingStructure();

  contactsMap = sortContacts(contacts).reduce((acc, contact, index) => {
    const userContact = createUserContact(contact, index);
    const letterGroup = userContact.lastName[0].toUpperCase();

    acc[letterGroup].contacts[index] = userContact;
    acc[letterGroup].ids.push(index);

    return acc;
  }, contactsMap);

  return contactsMap;
};
