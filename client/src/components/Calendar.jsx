import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function CalendarFull() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/api/activity')
      .then(response => {
        if (!response.ok) {
          throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);

        const eventList = data.map((item, index) => ({
          start: moment(item.start_Date).toDate(),
          end: moment(item.end_Date).toDate(),
          title: item.act_Name,
          color: index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'green' : 'red',
        }));

        setEvents(eventList);

        console.log(eventList);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาด: ', error);
      });
  }, []);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = event.color; // ใช้ property color ที่เพิ่มไว้ใน event
    const style = {
      backgroundColor,
      borderRadius: '10px',
      opacity: 0.8,
      color: 'white',
      border: '0',
      display: 'block',
    };
    return {
      style,
    };
  };

  return (
    <div className="App w-3/4 mx-auto my-20 bg-slate-100 rounded-lg shadow-xl">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "60vh" }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
}

export default CalendarFull;