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

  const getContactAddress = () => {
    const { street, city, state } = props.contact;
    return `${street}, ${city} ${state}`;
  };

  return (
    <div className={classNames}>
      {!props.selected ? (
        <button
          onClick={handleClickEvent}
          className="ContactCard-thumbnail"
          type="button"
        >
          <img
            src={props.contact.avatar.thumbnail}
            alt="contact-avatar"
            className="ContactCard-thumbnail-avatar"
          />
          <div className="ContactCard-thumbnail-name">
            <p>{props.contact.fullName}</p>
            <p>@{props.contact.username}</p>
          </div>
        </button>
      ) : (
        <div className="ContactCard-details">
          <button
            className="ContactCard-details-closeBtn"
            type="button"
            onClick={props.onCloseHandler}
          >
            x
          </button>
          <div className="ContactCard-details-header">
            <img
              src={props.contact.avatar.medium}
              alt="contact-avatar"
              className="ContactCard-details-avatar"
            />
            <div className="ContactCard-details-name">
              <p>{props.contact.fullName}</p>
              <p>@{props.contact.username}</p>
            </div>
          </div>
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
        </div>
      )}
    </div>
  );
};

export default ContactCard;
