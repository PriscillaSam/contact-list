import React from 'react';

import LetterButton from '../../atoms/LetterButton';
import './style.scss';

interface IContainerProps {
  alphabetCountMap: { [index: string]: number };
  // handleAlphabetChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  contacts: any[];
}

const Container: React.FC<IContainerProps> = props => {
  return (
    <div className="Container">
      <div className="Container-alphabet">
        {Object.keys(props.alphabetCountMap).map((letter, index) => {
          return (
            <div
              key={`Container-alphabets-${letter}`}
              className="Container-alphabet-button"
            >
              <LetterButton
                contactsCount={props.alphabetCountMap[letter]}
                text={letter}
                onClick={() => {}}
                active={false}
              />
            </div>
          );
        })}
      </div>
      <div>
        <header className="Container-header">
          <h1>Contacts List</h1>
        </header>
        <div className="Container-contacts">
          {/* This is where the contacts will be */}
        </div>
      </div>
    </div>
  );
};

export default Container;
