import React from 'react';

import './style.scss';

const Error = () => {
  return (
    <div className="Error">
      <h2>
        Ooops... Something happened &nbsp;
        <span role="img" aria-label="sad-emoji">
          ☹️
        </span>
        .
      </h2>
      <p>
        We apologize for the network issues. Please ensure you are connected to
        the internet before trying again.
      </p>
    </div>
  );
};

export default Error;
