import { useState, useEffect } from 'react';

import fetchContacts from '../utils/api';
import { normalizeContacts } from '../utils/helpers';

type ContactsMap = {
  [index: string]: IContactGroup;
};
type AppState = 'fetching' | 'done' | 'error';

const useContacts: any = () => {
  const [contacts, setContacts] = useState<ContactsMap>({});
  const [loadingState, setLoadingState] = useState<AppState>('fetching');

  useEffect(() => {
    (async function() {
      try {
        const { results } = await fetchContacts(200);
        const contactMap = normalizeContacts(results);

        setContacts(contactMap);
        setLoadingState('done');
      } catch (error) {
        setLoadingState('error');
      }
    })();
  }, []);

  return [contacts, loadingState];
};

export default useContacts;
