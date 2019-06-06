import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { humanize } from '../../utils/FormatHelpers';

import logo from '../../media/logo.svg';

import './Header.css';

const Header = ({ title, location }) => {
  const locationPathname = location.pathname;

  return (
    <header className="Header">
      <div className="Header__brand">
        <Link
          className="Header__link"
          to="/"
        >
          <img
            src={logo}
            className="Header__link__logo"
            alt="logo"
          />
          <h3 className="Header__link__title">GeneReact</h3>
        </Link>

        <h3 className="Header__path">
          {locationPathname ? `/ ${humanize(locationPathname)}` : ''}
        </h3>
      </div>
      <h1 className="Header__title">{title}</h1>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Header.defaultProps = {
  title: '',
  location: {
    pathname: '',
  },
};
