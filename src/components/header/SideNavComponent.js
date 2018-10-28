import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideNavComponent = props => (
  <div className={`sidenav sidenav--${props.isCollapsed ? 'open' : 'collapsed'}`}>
    {/* <div className="sidenav__content"> */}
    <ul>
      {props.headerData.map(navItem => (
        <li key={`sideNavItem-${navItem.name}`} className="text__md">
          <Link to={navItem.uri} onClick={props.onSideNavClick}>{navItem.name}</Link>
        </li>
      ))}
    </ul>
    {/* </div> */}
  </div>
);

SideNavComponent.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  headerData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSideNavClick: PropTypes.func.isRequired,
};

SideNavComponent.displayName = 'SideNavComponent';
export default SideNavComponent;
