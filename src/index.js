import React from 'react';
import { render } from 'react-dom';
// import HelloComponent from 'components/HelloComponent';
import HeaderComponent from 'components/header/HeaderComponent';
import LanderComponent from './components/lander/LanderComponent';
import './styles/style.scss';

const App = () => (
  <div className="root">
    <HeaderComponent />
    <LanderComponent />
  </div>
);

render(<App />, document.getElementById('app'));
