import React from 'react';
import { Link } from 'react-router';
import serviceWorker from '../../utils/serviceWorker';

if (__CLIENT__) {
  serviceWorker();
}

const Root = ({ children }) => (
  <div>
    <Link to="/about">about</Link>
    {children}
  </div>
);

Root.propTypes = {
  children: React.PropTypes.element
};

export default Root;
