import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import DateRangePickerComponent from './UI-Components/DateRangePickerComponent/DateRangePickerComponent';
import TableComponent2 from './UI-Components/TableComponent/TableComponent2';
import PhoneNumberComponent from './UI-Components/googleLibPhoneNumber/PhoneNumberComponent';
import Rheostat from './UI-Components/RheostatSlider/Index';

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Section1</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/about'>Section2</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/contact'>Section3</NavLink></li>
    </ul>
  </nav>
);

const About = () => (
  <div className='about'>
    <h1>section2</h1>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>section3</h1>
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Rheostat}></Route>
    <Route exact path='/phone' component={PhoneNumberComponent}></Route>
    <Route exact path='/date-picker' component={DateRangePickerComponent}></Route>
    <Route exact path='/About' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);

const App = () => (
  <div className='app'>
    <Main />
  </div>
);

export default App;
// <Navigation />