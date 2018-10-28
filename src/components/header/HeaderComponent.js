import React from 'react';
import { Link } from 'react-router-dom';
import SideNavComponent from 'components/header/SideNavComponent';
import HeaderData from 'data/headerData';


class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navCollapsed: false,
    };

    this.handleSideNavToggle = this.handleSideNavToggle.bind(this);
    this.handleSideNavClick = this.handleSideNavClick.bind(this);
  }

  handleSideNavToggle() {
    this.setState({ navCollapsed: !this.state.navCollapsed });
  }

  handleSideNavClick() {
    this.setState({ navCollapsed: false });
  }

  render() {
    return (
      <header className="header text__md">
        <SideNavComponent
          isCollapsed={this.state.navCollapsed}
          headerData={HeaderData}
          onSideNavClick={this.handleSideNavClick}
        />
        <nav className="header__nav">
          <button className="header__menu" onClick={this.handleSideNavToggle}>
            <i className="fas fa-bars" />
          </button>
          <div className="header__logo">
            CJD
          </div>
          <ul className="header__links">
            {
              HeaderData.map(navItem => (
                <li key={`navItem-${navItem.name}`} className="header__link">
                  <Link to={navItem.uri}>{navItem.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>
    );
  }
};

export default HeaderComponent;
