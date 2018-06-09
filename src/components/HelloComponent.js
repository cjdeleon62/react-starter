import React from 'react';
import PropTypes from 'prop-types';

const HelloComponent = props => (
  <div>{props.text}</div>
);

HelloComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

HelloComponent.displayName = 'HelloComponent';
export default HelloComponent;
