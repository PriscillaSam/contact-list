const config = {
  baseUrl: 'https://api.randomuser.me',
  numberCards: 120,
};

const fetchContact = async (results = config.numberCards) => {
  const contacts = await fetch(
    `${config.baseUrl}/?results=${results}&inc=name,email,phone,location,picture,login&nat=us`,
  );
  return contacts.json();
};

export default fetchContact;

// {
//   error: "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you."
// }
