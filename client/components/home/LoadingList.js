import React from 'react';

const progressContainer = {
  margin: '5% auto',
  background: '#fff',
  width: '80%',
  border: '1px solid #eee',
  boxShadow: '0px 0px 4px 0px #eee',
  padding: '5%'
};

const progress = {
  height: '35px',
  width: '35px',
  border: '1px solid #ddd',
  margin: '0 0 10px',
  borderRadius: '70px',
  background: '#eee'
};

const LoadingList = () => (
  <div style={progressContainer}>
    <div>
      <div style={progress} />
    </div>
    <div>
      <div style={progress} />
    </div>
    <div>
      <div style={progress} />
    </div>
    <div>
      <div style={progress} />
    </div>
  </div>
);

export default LoadingList;
