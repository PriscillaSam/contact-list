import React from 'react';
import classnames from 'classnames';
import './style.scss';

interface IContactCardProps {
  contact: IUserContact;
  selected: boolean;
  onClickHandler: (contact: IUserContact) => void;
  onCloseHandler: () => void;
}

const ContactCard: React.FC<IContactCardProps> = props => {
  const handleClickEvent = () => {
    props.onClickHandler(props.contact);
  };

  const classNames = classnames({
    ContactCard: true,
    'ContactCard-selected': props.selected,
  });

  const buttonClassNames = classnames({
    'ContactCard-button': true,
    'ContactCard-thumbnail': !props.selected,
    'ContactCard-header': props.selected,
  });

  const getContactAddress = () => {
    const { street, city, state } = props.contact;
    return `${street}, ${city} ${state}`;
  };

  return (
    <div className={classNames}>
      <button
        onClick={handleClickEvent}
        className={buttonClassNames}
        type="button"
        disabled={props.selected}
      >
        <img
          src={props.contact.avatar.medium}
          alt="contact-avatar"
          className={`ContactCard-avatar ${
            props.selected ? 'ContactCard-avatar-large' : ''
          }`}
        />
        <div className="ContactCard-name">
          <p>{props.contact.fullName}</p>
          <p>@{props.contact.username}</p>
        </div>
      </button>
      <div className="ContactCard-details">
        {props.selected ? (
          <button
            className="ContactCard-details-closeBtn"
            type="button"
            onClick={props.onCloseHandler}
          >
            x
          </button>
        ) : null}
        {props.selected ? (
          <div className="ContactCard-details-body">
            <p>
              Email - <br />
              <span>{props.contact.email}</span>
            </p>

            <p>
              Phone - <br />
              <span>{props.contact.phone}</span>
            </p>
            <p>
              Address - <br />
              <span>{getContactAddress()}</span>
            </p>
            <p>
              Postcode - <br />
              <span>{props.contact.postcode}</span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ContactCard;
