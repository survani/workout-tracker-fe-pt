import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import NavigationBar from "../navigationbar/navigationbar";
import MobileNav from "../mobilenav/MobileNav";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { CalendarContainer, NavCircle} from "./style";
import { axiosWithAuth } from "../authentication/axiosWithAuth";

const Calendar = () => {
  const calendarComponentRef = React.createRef();

  const [workoutEvent, setWorkoutEvent] = useState([]);
  const [foodEvent, setFoodEvent] = useState([]);

  const [calendarEvent, setCalendarEvent] = useState([
    {
      event: "Current Event",
      start: new Date(),
    },
  ]);

  const getDates = () => {
    const dates = axiosWithAuth()
      .get(`https://frozen-hamlet-18508.herokuapp.com/api/workouts`)
      .then((res) => {
        console.log(res);
        const info = [];
        res.data.message.forEach((v) => {
          info.push({ title: v.workout_title, date: v.workout_date });
        });
        setWorkoutEvent(info);
      })
      .catch((err) => {
        console.log("error in Calendar component", err);
      });
  };

  const getFoodDates = () => {
    const foodDates = axiosWithAuth()
      .get(`https://frozen-hamlet-18508.herokuapp.com/api/diets`)
      .then((res) => {
        console.log(res.data);
        const foodInfo = [];
        res.data.forEach((v) => {
          foodInfo.push({ title: v.food_name, date: v.meal_date });
        });
        setFoodEvent(foodInfo);
      })
      .catch((err) => {
        console.log("error in Calendar component", err);
      });
  };
  useEffect(() => {
    getDates();
    getFoodDates();
  }, []);

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
    <div>
      <NavCircle>
       <MobileNav />
      </NavCircle>
      <div>
        <NavigationBar />
      </div>
      <CalendarContainer>

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
            events={[...workoutEvent, ...foodEvent, ...calendarEvent]}
            dateClick={handleDateClick}
          />
        </div>
      </CalendarContainer>
    </div>
  );
};

export default Calendar;
