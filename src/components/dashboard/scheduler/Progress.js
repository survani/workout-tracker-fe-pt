import React from 'react';


const Progress = () => {
  return (
    <div className="progress_main">
      <p>Overall Progress</p>
      <div className='progress'>
        <div className='activities'>
          <h1 className='count'>5</h1>
          <h3>Scheduled Activities</h3>
          {/* Data should be replaced coming from endpoints.*/}
        </div>
      </div>
      <a href='google.com'>See more progress</a>
    </div>
  );
};

export default Progress;
