import React from 'react';
import Container from './components/molecules/Container';

import fetchContacts from './utils/api';
import { normalizeContacts } from './utils/helpers';
import './style.scss';

type AppState = 'idle' | 'fetching' | 'done';
const data = {
  results: [
    {
      name: { title: 'Mrs', first: 'Leona', last: 'Hughes' },
      location: {
        street: { number: 1322, name: 'Avondale Ave' },
        city: 'Hartford',
        state: 'Washington',
        country: 'United States',
        postcode: 26261,
        coordinates: { latitude: '-15.4944', longitude: '174.4117' },
        timezone: { offset: '-12:00', description: 'Eniwetok, Kwajalein' },
      },
      email: 'leona.hughes@example.com',
      login: {
        uuid: '9670206e-232b-431a-ae1d-92d9b73ddbc1',
        username: 'ticklishmeercat213',
        password: 'alleycat',
        salt: 'pjRmfOi5',
        md5: '33225388b9a5de3687c6dba1d8dd3a96',
        sha1: 'e74f584d922e3fc9b6bc92b7dbd2c6c316ed5a57',
        sha256:
          '55c5910459ad8c60f18f0942eb91ce18f68a0ebf0da0254cf7651f07b2a4bd5e',
      },
      phone: '(428)-877-0824',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/68.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/68.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/68.jpg',
      },
    },
  ],
  info: { seed: '46e4cbd6abd3e143', results: 1, page: 1, version: '1.3' },
};

const App = () => {
  const [contacts, setContacts] = React.useState([]);
  const [alphabelCountMap, setAlphabetCountMap] = React.useState({});
  const [state, setState] = React.useState<AppState>('idle');

  React.useEffect(() => {
    (async function() {
      const { results } = data;

      const { contactMapping, alphabetCountMapping } = normalizeContacts(
        results,
      );
      setAlphabetCountMap(alphabetCountMapping);
      setContacts(contactMapping);
    })();
  }, []);

  return (
    <div className="App">
      <Container alphabetCountMap={alphabelCountMap} contacts={contacts} />
    </div>
  );
};

export default App;
