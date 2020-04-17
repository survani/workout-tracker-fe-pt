import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import './calendar.css';

const Calendar = () => {
  return (
    <div>
      <h1>Schedule</h1>
      <div className='calendar-container'>
        <FullCalendar defaultView='dayGridMonth' plugins={[dayGridPlugin]} />
      </div>
    </div>
  );
};

export default Calendar;
