import React from 'react';
import {NavLink} from 'react-router-dom';
import Slider from './slider'
const Header = () => (
    <nav className="header">
        <div className="header__container">
            <a href="#" className="header__logo">Expensify</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
              <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
              <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
            </ul>
            <Slider/>
        </div>
    </nav>
);

export default Header;