import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import PropTypes from 'prop-types';

import Header from '../Header';

import './Page.css';

const Page = ({ children, ...props }) => (
  <div className="Page">
    <Header {...props} />

    <div className="Page__body">
      {children}
    </div>
  </div>
);

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};


const toJSXStringOptions = {
  showFunctions: true,
  showDefaultProps: false,
  sortProps: false,
};

export const getPageTableCell = (title, component) => (
  <tr>
    <td>
      <h2 className="Page__section__title">{title}</h2>
    </td>
    <td className="Page__section__code">
      <pre>
        <code>
          {reactElementToJSXString(component, toJSXStringOptions)}
        </code>
      </pre>
    </td>
    <td>{component}</td>
  </tr>
);
