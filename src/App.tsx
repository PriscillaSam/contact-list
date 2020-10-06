import React from 'react';

import Loader from './components/atoms/Loader';
import Error from './components/atoms/Error';
import Container from './components/molecules/Container';

import useContacts from './hooks/useContacts';
import './style.scss';

const App = () => {
  const [contactsMap, loadingState] = useContacts();

  if (loadingState === 'error') {
    return (
      <div className="App">
        <Error />
      </div>
    );
  }

  return (
    <div className="App">
      {loadingState === 'fetching' ? (
        <Loader />
      ) : (
        <Container contactsMap={contactsMap} />
      )}
    </div>
  );
};

export default App;
