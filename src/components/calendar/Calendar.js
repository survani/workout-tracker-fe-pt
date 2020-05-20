import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

const Calendar = () => {
  return (
    <div>
      <div className='calendar_main'>
        <h1 className='calendar_headline'>Schedule</h1>
      </div>

      <div className='calendar-container'>
        <FullCalendar
          defaultView='dayGridMonth'
          plugins={[dayGridPlugin]}
          events={[
            { title: 'Biceps', date: '2020-04-28' },
            { title: 'Legs', date: '2020-04-29' },
            { title: 'Cardio', date: '2020-04-30' },
            { title: 'Back', date: '2020-05-01' },
            { title: 'Chest', date: '2020-05-04' },
            { title: 'Arms', date: '2020-05-05' },
          ]}
        />
      </div>
    </div>
  );
};

export default Calendar;
