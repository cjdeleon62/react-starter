import React from 'react';
import { render } from 'react-dom';
import HelloComponent from 'components/HelloComponent';
import './styles/style.scss';

const helloWorldText = 'Hello World';

const App = () => (
  <div>
    <HelloComponent text={helloWorldText} />
  </div>
);

render(<App />, document.getElementById('app'));
