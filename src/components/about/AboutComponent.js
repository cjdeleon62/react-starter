import React from 'react';

const AboutComponent = () => (
  <section className="about">
    <div className="about__container">
      <div className="about__image">
        <img src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6a14f6903383d2e97411be5015dbc68f&auto=format&fit=crop&w=750&q=80" alt="Profile" />
      </div>
      <div className="about__description">
        <h1 className="about__description--title text__lg">
          What I Do
        </h1>
        <p className="text__sm">
          I am a twenty-something year old Front End Web Developer who enjoys creating web pages that are fast, lightweight, and have good UI/UX. Currently, I work for Forbes creating many new features on the AMP article pages while also working on various other platforms across the site. I am not tied down to any particular framework <em>(Although <a href="https://reactjs.org" aria-label="React Library Link"><strong>React</strong></a> is my favorite.)</em> which allows me to use the right technology for any given project.
        </p>
      </div>
    </div>
  </section>
);

AboutComponent.displayName = 'AboutComponent';
export default AboutComponent;
