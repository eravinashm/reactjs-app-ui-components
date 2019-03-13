import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import DateRangePickerComponent from './UI-Components/DateRangePickerComponent/DateRangePickerComponent';
import TableComponent2 from './UI-Components/TableComponent/TableComponent2';
import PhoneNumberComponent from './UI-Components/googleLibPhoneNumber/PhoneNumberComponent';
// import Rheostat from './UI-Components/RheostatSlider/Index';
// import Waveform from './UI-Components/Waveform/Waveform';
import WavesurferComponent from './UI-Components/WavesurferComponent/WavesurferComponent';
import GridComponent from './UI-Components/GridComponent/GridComponent';

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
    <Route exact path="/" render={() => <WavesurferComponent src={'./src.mp3'} />} />
    {/* <Route exact path='/waveform' component={Waveform}></Route>
     <Route exact path='/rheostat' component={Rheostat}></Route> */}
    <Route exact path='/phone' component={PhoneNumberComponent}></Route>
    <Route exact path='/date-picker' component={DateRangePickerComponent}></Route>
    <Route exact path='/About' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route path='/grid' component={GridComponent} />
  </Switch>
);

const App = () => (
  <div className='app'>
    <Main />
  </div>
);

export default App;
// <Navigation />