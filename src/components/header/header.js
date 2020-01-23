import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <React.Fragment>
      <header className="App-header">
        <img src="https://genoatelepsychiatry.com/wp-content/uploads/2018/06/genoa_logo_new_hight.png" className="App-logo" alt="logo" />
        <h2>Welcome to Genoa Client</h2>
      </header>
      <div className="App-spacer"></div>
    </React.Fragment>
  );
};

export default Header;