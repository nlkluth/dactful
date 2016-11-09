import Root from '../components/application/Root';
import Listing from '../components/home/Listing';

// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') {
  require.ensure = (d, c) => {
    c(require);
  };
}

export default {
  path: '/',
  component: Root,
  getChildRoutes(partialNextState, callback) {
    require.ensure([], (require) => {
      console.log('requiring');
      callback(null, [
        require('./About')
      ]);
    });
  },
  indexRoute: {
    component: Listing
  }
};
