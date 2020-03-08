import React from 'react';

import LetterButton from '../../atoms/LetterButton';
import ContactCard from '../../atoms/ContactCard';

import './style.scss';

interface IContainerProps {
  alphabetCountMap: { [index: string]: number };
  contacts: { [index: string]: IContactGroup };
}

const contactGroup: IContactGroup = { contacts: {}, ids: [] };

const Container: React.FC<IContainerProps> = props => {
  const [activeContact, setActiveContact] = React.useState<IUserContact>(
    {} as IUserContact,
  );
  const [activeContactGroup, setActiveContactGroup] = React.useState<string>(
    'A',
  );
  const [selectedContactGroup, setSelectedContactGroup] = React.useState<
    IContactGroup
  >(contactGroup);

  React.useEffect(() => {
    setSelectedContactGroup(props.contacts[activeContactGroup]);
  }, [activeContactGroup, props.contacts]);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget.dataset;
    //@ts-ignore
    setActiveContactGroup(value);
  };

  const handleContactCardClick = (contact: IUserContact) => {
    setActiveContact(contact);
  };

  const handleContactCardClose = () => {
    setActiveContact({} as IUserContact);
  };

  return (
    <div className="Container">
      <div className="Container-alphabet">
        {Object.keys(props.alphabetCountMap).map(letter => {
          return (
            <div
              key={`Container-alphabet__${letter}`}
              className="Container-alphabet-button"
            >
              <LetterButton
                contactsCount={props.alphabetCountMap[letter]}
                text={letter}
                onClickHandler={handleButtonClick}
                active={letter === activeContactGroup}
              />
            </div>
          );
        })}
      </div>

      <div className="Container-contacts">
        <header className="Container-header">
          <h1>Contacts List</h1>
          <div className="Container-header-divider" />
        </header>

        <div className="Container-contacts-wrapper">
          {selectedContactGroup.ids.map(id => {
            const contact = selectedContactGroup.contacts[id];

            const isSelected =
              `${contact.lastName}${contact.id}` ===
              `${activeContact.lastName}${activeContact.id}`;

            return (
              <ContactCard
                key={`Container-contacts__${contact.id}`}
                contact={contact}
                selected={isSelected}
                onClickHandler={handleContactCardClick}
                onCloseHandler={handleContactCardClose}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Container;
