import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

const Calendar = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <FullCalendar defaultView='dayGridMonth' plugins={[dayGridPlugin]} />
    </div>
  );
};

export default Calendar;
