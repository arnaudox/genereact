import React, { Children } from 'react';
import PropTypes from 'prop-types';

import './Navbar.css';

const Navbar = ({ children }) => (
  <ul className="Navbar">
    {Children.toArray(children).map(child => (
      <li
        key={child.key}
        className="Navbar__tab"
      >
        {child}
      </li>
    ))}
  </ul>
);

export default Navbar;

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};
