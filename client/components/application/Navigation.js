import React from 'react';
import { Link } from 'react-router';

if (__CLIENT__) {
  require('./Navigation.scss');
}

const style = {
  background: '#048A81',
  height: '55px',
  color: '#fff'
};

const Navigation = () => (
  <div
    style={style}
    className="navigation"
  >
    <div> dactful </div>
    <div className="subnav">
      <Link to="/about"> about </Link>
    </div>
  </div>
);

export default Navigation;
