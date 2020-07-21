import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import NavigationBar from "../navigationbar/navigationbar";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { CalendarContainer } from "./style";

const Calendar = () => {
  const calendarComponentRef = React.createRef();

  const [calendarEvent, setCalendarEvent] = useState([
    {
      event: "Current Event",
      start: new Date(),
    },
  ]);

  const handleDateClick = (arg) => {
    if (
      window.confirm("Would you like to add an event to " + arg.dateStr + " ?")
    ) {
      // add new event data
      setCalendarEvent(
        // creates a new array
        calendarEvent.concat({
          event: "New Event",
          start: arg.date,
          allDay: arg.allDay,
        })
      );
    }
  };

  return (
    <>
      <NavigationBar />
      <CalendarContainer>
        <div className="calendar_main">
            <h1 className="calendar_headline">Schedule</h1>

          <div className="calendar-container">
            <FullCalendar
              defaultView="dayGridMonth"
              header={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              ref={calendarComponentRef}
              events={calendarEvent}
              dateClick={handleDateClick}
            />
          </div>
        </div>
      </CalendarContainer>
    </>
  );
};

export default Calendar;
