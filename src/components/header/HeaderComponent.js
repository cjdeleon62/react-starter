import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => (
  <header className="header text__md">
    <nav className="header__nav">
      <div className="header__logo">
        CJD
      </div>
      <ul className="header__links">
        <li className="header__link">
          <Link to="/">Home</Link>
        </li>
        <li className="header__link">
          <Link to="/about">About</Link>
        </li>
        <li className="header__link">
          <Link to="/my-works">My Works</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default HeaderComponent;
