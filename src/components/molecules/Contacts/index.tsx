import React, { useCallback, useState } from 'react';

import ContactCard from '../../atoms/ContactCard';

interface IContactsProps {
  selectedContactGroup: IContactGroup;
}

const Contacts: React.FC<IContactsProps> = ({ selectedContactGroup }) => {
  const [activeContact, setActiveContact] = useState<IUserContact>(
    {} as IUserContact,
  );
  const handleContactCardClick = useCallback((contact: IUserContact) => {
    setActiveContact(contact);
  }, []);

  const handleContactCardClose = useCallback(() => {
    setActiveContact({} as IUserContact);
  }, []);

  return (
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
  );
};

export default Contacts;
