import React from 'react';

import Loader from './components/atoms/Loader';
import Error from './components/atoms/Error';
import Container from './components/molecules/Container';

import fetchContacts from './utils/api';
import { normalizeContacts } from './utils/helpers';
import './style.scss';

type AppState = 'fetching' | 'done' | 'error';
type ContactsMap = {
  [index: string]: IContactGroup;
};

const App = () => {
  const [contacts, setContacts] = React.useState<ContactsMap>({});
  const [alphabelCountMap, setAlphabetCountMap] = React.useState({});
  const [state, setState] = React.useState<AppState>('fetching');

  React.useEffect(() => {
    (async function() {
      try {
        const { results } = await fetchContacts(200);
        const { contactMapping, alphabetCountMapping } = normalizeContacts(
          results,
        );

        setAlphabetCountMap(alphabetCountMapping);
        setContacts(contactMapping);
      } catch (error) {
        setState('error');
      }
    })();
  }, []);

  React.useEffect(() => {
    if (contacts['A']) {
      setState('done');
    }
  }, [contacts]);

  if (state === 'error') {
    return (
      <div className="App">
        <Error />
      </div>
    );
  }

  return (
    <div className="App">
      {state === 'fetching' ? (
        <Loader />
      ) : (
        <Container alphabetCountMap={alphabelCountMap} contacts={contacts} />
      )}
    </div>
  );
};

export default App;
