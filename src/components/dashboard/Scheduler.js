import React from 'react';
import './scheduler.css';

const Scheduler = () => {
  return (
    <div className='container'>
      <p>Coming up Today</p>
      <div className='workout'>
        <h3>Upper Body</h3>
        <h3>12pm -12:30pm</h3>
        {/* Data should be replaced coming from endpoints.*/}
      </div>
      <a href='google.com'>See Weekly Schedule</a>
    </div>
  );
};

export default Scheduler;
