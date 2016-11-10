import React from 'react';
import serviceWorker from '../../utils/serviceWorker';
import Navigation from './Navigation';

if (__CLIENT__) {
  serviceWorker();
}

const Root = ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
);

Root.propTypes = {
  children: React.PropTypes.element
};

export default Root;
