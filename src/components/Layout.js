import React from 'react';
import T from 'prop-types';
import Appbar from './Appbar';

const styles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 12,
  paddingLeft: 12,
};

const Layout = ({ children }) => (
  <div style={styles}>
    <Appbar />
    <hr />
    {children}
  </div>
);

Layout.propTypes = {
  children: T.shape().isRequired,
};

export default Layout;
