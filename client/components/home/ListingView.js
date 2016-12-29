import React from 'react';

if (__CLIENT__) {
  require('./Listing.scss');
}

const renderTasks = ({ collapsed, tasks = [] }) => {
  if (collapsed) {
    return;
  }

  return tasks.map((item, index) => (
    <div key={index}>
      <div className="progress" />
      {item}
    </div>
  ));
};

const ListingView = ({ list = [] }) => (
  <div>
    {list.map((item, index) => (
      <div className="container" key={index}>
        {renderTasks(item)}
      </div>
    ))}
  </div>
);

ListingView.propTypes = {
  list: React.PropTypes.array
};

export default ListingView;
