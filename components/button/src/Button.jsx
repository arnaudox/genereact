import React from 'react';
import PropTypes from 'prop-types';

import { bemCls } from './utils/ClassNameHelpers';

import './Button.css';

const Button = ({
  className, text, type, iconName, disabled, onClick, loading, tooltip,
}) => {
  if ((onClick || type === 'submit') && (text || iconName)) {
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        type={type}
        className={`Button ${className} ${
          bemCls(`Button ${className}`, '--disabled', disabled)}`}
        onClick={onClick}
        disabled={disabled || loading}
        title={tooltip}
      >
        {(iconName || loading)
          && (
          <div className={`${bemCls(`Button ${className}`, '__icon')} ${
            bemCls(`Button ${className}`, '__icon--disabled', disabled)}`}
          >
            {loading ? <Icon name="spinner" className="fa-spin" /> : <Icon name={iconName} />}
          </div>
          )
        }
        {(text || loading)
          && (
          <div className={`${bemCls(`Button ${className}`, '__text')} ${
            bemCls(`Button ${className}`, '__text--disabled', disabled)}`}
          >
            {(typeof loading === 'string' && loading) || text}
          </div>
          )
        }
      </button>
    );
  }
  return null;
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  tooltip: PropTypes.string,
  type: PropTypes.string,
  iconName: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  text: '',
  tooltip: '',
  type: 'button',
  iconName: '',
  disabled: false,
  loading: false,
  onClick: undefined,
};


const Icon = ({ name, className }) => {
  if (name) {
    return (
      <span
        aria-hidden="true"
        className={`fa fa-${name} ${className}`}
      />
    );
  }
  return null;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  name: '',
};
