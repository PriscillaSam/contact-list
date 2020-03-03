import React from 'react';

interface IContainerProps {
  alphabets: any[];
  handleAlphabetChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  contacts: any[];
}

const Container = () => {
  return (
    <div className="Container">
      <div className="Container-alphabets">
        {/* This is where the alphabets will live */}
      </div>
      <div>
        {/* This is where the contacts will be */}
        <header className="App-header">
          <h1>Contact List</h1>
        </header>
      </div>
    </div>
  );
};

export default Container;
