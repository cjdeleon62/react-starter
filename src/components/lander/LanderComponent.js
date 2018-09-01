import React from 'react';
import { Link } from 'react-router-dom';

const LanderComponent = () => (
  <section className="lander">
    <h1 className="lander__jumbo text__xl">
      Hi, my name is Chris.
    </h1>
    <div className="lander__text text__md">
      <p>Jr. Front End Developer at Forbes Media .LLC</p>
      <p>Creator of efficient, maintainable, and scalable code.</p>
      <p>Still learning.</p>
    </div>
    <div className="lander__links">
      <Link to="/my-works">
        <button className="lander__button lander__button--my-works text__sm btn">My Works</button>
      </Link>
      <Link to="/about">
        <button className="lander__button lander__button--about text__sm btn">About Me</button>
      </Link>
    </div>
  </section>
);

LanderComponent.displayName = 'LanderComponent';
export default LanderComponent;
