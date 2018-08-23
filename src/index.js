import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { render } from 'react-dom';
// import HelloComponent from 'components/HelloComponent';
import HeaderComponent from 'components/header/HeaderComponent';
import LanderComponent from './components/lander/LanderComponent';
import AboutComponent from './components/about/AboutComponent';
import WorksComponent from './components/works/WorksComponent';
import ContactsComponent from './components/contacts/ContactsComponent';

import './styles/style.scss';

const App = () => (
  <div className="root">
    <Router>
      <Fragment>
        <HeaderComponent />
        <Route exact path="/" component={LanderComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/my-works" component={WorksComponent} />
        <Route path="/contacts" component={ContactsComponent} />
      </Fragment>
    </Router>
  </div>
);

render(<App />, document.getElementById('app'));
