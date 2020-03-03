import React from 'react';
import classnames from 'classnames';
import './style.scss';

interface ILetterButtonProps {
  letter: string;
  contactsCount: number;
  active: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const LetterButton: React.FC<ILetterButtonProps> = props => {
  const classNames = classnames({
    LetterButton: true,
    'LetterButton-active': props.active,
    'LetterButton-disabled': props.contactsCount === 0,
  });

  return (
    <button className={classNames} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default LetterButton;
