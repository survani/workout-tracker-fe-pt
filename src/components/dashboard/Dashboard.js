import React from 'react';
import Scheduler from './Scheduler';
import Progress from './Progress';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Scheduler />
      <Progress />
      <button style={{ marginTop: '50px' }} type='submit'>
        Schedule
      </button>
    </div>
  );
};

export default Dashboard;
