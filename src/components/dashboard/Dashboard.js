import React from 'react';
import Scheduler from './Scheduler';
import Navigation from '../Navigation/Navigation'

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <h1>Dashboard</h1>
      <Scheduler />
    </div>
  );
};

export default Dashboard;
