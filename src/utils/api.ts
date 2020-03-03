const config = {
  baseUrl: 'https://api.randomuser.me',
  numberCards: 120,
};

const fetchContact = async (results = config.numberCards) => {
  const contacts = await fetch(`${config.baseUrl}/?results=${results}`);
  return contacts.json();
};

export default fetchContact;
