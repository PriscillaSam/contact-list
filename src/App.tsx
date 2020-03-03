import React from 'react';
import Container from './components/molecules/Container';

import fetchContacts from './utils/api';
import { normalizeContacts } from './utils/helpers';

type AppState = 'idle' | 'fetching' | 'done';

const App = () => {
  const [contacts, setContacts] = React.useState([]);
  const [state, setState] = React.useState<AppState>('idle');

  React.useEffect(() => {
    (async function() {
      const { results } = await fetchContacts(2);
      setContacts(results);
    })();
  }, []);

  return (
    <div className="App">
      <Container />
    </div>
  );
};

export default App;
