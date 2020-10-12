import React, { useState, useCallback, useEffect } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Error from '../../atoms/Error';
import Contacts from '../Contacts';
import Letters from '../Letters';

import './style.scss';

interface IContainerProps {
  contactsMap: {
    [index: string]: IContactGroup;
  };
}

const Container: React.FC<IContainerProps> = props => {
  const [activeContactGroup, setActiveContactGroup] = useState<string>('A');
  const [selectedContactGroup, setSelectedContactGroup] = useState<
    IContactGroup
  >(props.contactsMap['A']);

  useEffect(() => {
    setSelectedContactGroup(props.contactsMap[activeContactGroup]);
  }, [activeContactGroup, props.contactsMap]);

  const handleButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { value } = event.currentTarget.dataset;
      setActiveContactGroup(value as string);
    },
    [],
  );

  return (
    <div className="Container">
      <Letters
        contactsMap={props.contactsMap}
        handleButtonClick={handleButtonClick}
        activeContactGroup={activeContactGroup}
      />
      <div className="Container-contacts">
        <header className="Container-header">
          <h1>Contacts List</h1>
          <div className="Container-header-divider" />
        </header>
        <ErrorBoundary FallbackUI={<Error />}>
          <Contacts selectedContactGroup={selectedContactGroup} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Container;
