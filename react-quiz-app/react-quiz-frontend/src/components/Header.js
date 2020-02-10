import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ()=>(
  <div>
    <header className="header">
      <div className="container">
        <h1 className="header__title">Brand</h1><p className="header__subtitle">here goes subtitle...</p>
        <div className="navbar">
          <NavLink to="/" className="navbar__nav-link" activeClassName="is-active" exact={true}>Home</NavLink>
          <NavLink to="/quiz" className="navbar__nav-link" activeClassName="is-active">Quiz</NavLink>
          <NavLink to="/about" className="navbar__nav-link" activeClassName="is-active">About</NavLink>
          <NavLink to="/help" className="navbar__nav-link" activeClassName="is-active">Help</NavLink>
        </div>
        </div>
    </header>
  </div>
);

export default Header;