import React from 'react';
import LetterButton from '../../atoms/LetterButton';

interface ILettersProps {
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  activeContactGroup: string;
  contactsMap: {
    [index: string]: IContactGroup;
  };
}

const Letters: React.FC<ILettersProps> = ({
  contactsMap,
  handleButtonClick,
  activeContactGroup,
}) => {
  return (
    <div className="Container-alphabet">
      {Object.keys(contactsMap).map(letter => {
        const { ids } = contactsMap[letter];

        return (
          <div
            key={`Container-alphabet__${letter}`}
            className="Container-alphabet-button"
          >
            <LetterButton
              text={letter}
              contactsCount={ids.length}
              onClickHandler={handleButtonClick}
              active={letter === activeContactGroup}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Letters;
