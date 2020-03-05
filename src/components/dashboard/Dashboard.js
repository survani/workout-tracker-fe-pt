import React from 'react';
import Scheduler from './Scheduler';
import Progress from './Progress';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Scheduler />
      <Progress />
    </div>
  );
};

export default Dashboard;
