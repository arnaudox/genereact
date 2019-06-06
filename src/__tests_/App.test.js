import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Route } from 'react-router-dom';

import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render the routes correctly', () => {
  const tree = shallow(<App />);
  const paths = tree.find(Route).reduce((map, route) => {
    const pathMap = { ...map };
    const componentProp = route.props().component;
    pathMap[route.prop('path')] = componentProp.name;

    return pathMap;
  }, {});

  expect(paths['/']).toBe('RootPage');
  expect(paths['/button']).toBe('ButtonPage');

  expect(shallowToJson(tree)).toMatchSnapshot();
});
