import React from 'react';
import classnames from 'classnames';
import './style.scss';

interface ILetterButtonProps {
  text: string;
  contactsCount: number;
  active: boolean;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const LetterButton: React.FC<ILetterButtonProps> = props => {
  const classNames = classnames({
    LetterButton: true,
    'LetterButton-active': props.active,
    'LetterButton-disabled': props.contactsCount === 0,
  });

  return (
    <button
      className={classNames}
      onClick={props.onClickHandler}
      data-value={props.text}
      disabled={props.contactsCount === 0}
    >
      {props.text}
      <span className="LetterButton-badge">{props.contactsCount}</span>
    </button>
  );
};

export default LetterButton;
