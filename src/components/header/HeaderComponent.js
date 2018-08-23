import React from 'react';

const HeaderComponent = () => (
  <header className="header">
    <nav className="header__nav">
      <div className="header__logo">
        CJD
      </div>
      <ul className="header__links">
        <li className="header__link">
          <a href="#">Home</a>
        </li>
        <li className="header__link">
          <a href="#">About</a>
        </li>
        <li className="header__link">
          <a href="#">Experiments</a>
        </li>
        <li className="header__link">
          <a href="#">Contacts</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default HeaderComponent;
