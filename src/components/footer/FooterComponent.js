import React from 'react';

const FooterComponent = () => (
  <div className="footer">
    <div className="footer__block">
      <a href="mailto:cjdeleon215@gmail.com" target="_top" className="footer__link footer__link--email">
        <i className="far fa-envelope" />
      </a>
      <a href="https://www.linkedin.com/in/cjdeleon62/" target="_blank" rel="noopener noreferrer" className="footer__link footer__link--linkedin">
        <i className="fab fa-linkedin-in" />
      </a>
      <a href="https://github.com/cjdeleon62/" target="_blank" rel="noopener noreferrer" className="footer__link footer__link--github">
        <i className="fab fa-github" />
      </a>
    </div>
  </div>
);

FooterComponent.displayName = 'FooterComponent';

export default FooterComponent;
