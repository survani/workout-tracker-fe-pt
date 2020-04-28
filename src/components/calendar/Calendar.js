import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import './calendar.css';

const Calendar = () => {
  return (
    <div>
      <div className="calendar_main">
        <h1 className="calendar_headline">Schedule</h1>
    </div>
      
      <div className='calendar-container'>
        <FullCalendar defaultView='dayGridMonth' plugins={[dayGridPlugin]} />
      </div>
    </div>
  );
};

export default Calendar;
