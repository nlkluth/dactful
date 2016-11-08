import React from 'react';
import serviceWorker from '../../utils/serviceWorker';

if (__CLIENT__) {
  serviceWorker();
}

const Root = () => (
  <p> test </p>
);

export default Root;
