import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from './containers';
import { NavLink } from 'react-router-dom';

const Routes = () => (
<nav className="full-width">
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
  </ul>
</nav>
);

export default Routes;