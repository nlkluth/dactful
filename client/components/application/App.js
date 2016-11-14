import React from 'react';
import { Router, browserHistory } from 'react-router';
import rootRoute from '../../routes/RootRoute';

const App = () => (
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
);

export default App;
