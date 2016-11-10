import React from 'react';
import LoadingList from './LoadingList';

const Listing = ({ list }) => {
  if (!list) {
    return <LoadingList />;
  }

  return <p> Real list </p>;
};

Listing.propTypes = {
  list: React.PropTypes.object
};

export default Listing;
