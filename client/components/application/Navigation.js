import React from 'react';
import { Link } from 'react-router';

const style = {
  background: '#048A81',
  height: '55px',
  color: '#fff'
};

const Navigation = () => (
  <div
    style={style}
  >
    <div> dactful </div>
    <Link to="/about"> about </Link>
  </div>
);

export default Navigation;
