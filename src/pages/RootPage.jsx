import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../layout/Page';
import Navbar from '../layout/Navbar';

const RootPage = props => (
  <Page
    {...props}
    title="GeneReact UI components library"
  >
    <Navbar>
      <Link className="Navbar__link" to="/button">Button</Link>
    </Navbar>
  </Page>
);

export default RootPage;
