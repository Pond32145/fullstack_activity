import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';

const localizer = momentLocalizer(moment);

function CalendarFull() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [studentID, setstudentID] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3333/api/activity')
      .then(response => {
        if (!response.ok) {
          throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล');
        }
        return response.json();
      })
      .then(data => {
        const eventList = data.map((item, index) => ({
          start: moment(item.act_dateStart).toDate(),
          end: moment(item.act_dateEnd).toDate(),
          title: item.act_title,
          location: item.act_location,
          id: item.act_ID,
          color: index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'green' : 'red',
        }));
        setEvents(eventList);

      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาด: ', error);
      });

      const student_ID = localStorage.getItem('userParams')
      setstudentID(student_ID);

  }, []);

  const reservActivity = () => {
    const manageData = {
      man_status: 1,
      std_ID: studentID,
      act_ID: selectedEvent.id
    }

    fetch('http://localhost:3333/reserve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(manageData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        if (data.status === 'ok') {
          Swal.fire({
            icon: 'success',
            title: 'จองเข้าร่วมกิจกรรมสำเร็จ!',
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(() => {
            window.location.reload(); // รีเฟรชหน้าจอ
          }, 2000); // ล่าช้าการรีเฟรชให้เกิดชั่วโมง 2 วินาที
        } else {
          console.log("error", data);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = event.color;
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

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App w-3/4 mx-auto my-10 bg-slate-50 rounded-lg shadow-xl p-10">
      <h1 className="text-center text-3xl font-bold mb-5">ปฏิทินกิจกรรม</h1>

      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "50vh" }}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={handleEventClick}
      />

      {selectedEvent && showPopup && (
        <div className="fixed w-72 md:w-fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
        <div className="w-full justify-end flex ">
        <div className="cursor-pointer flex" onClick={closePopup}>
        <CloseIcon />
      </div></div>
        <div className="text-left -mt-5">
            <h2 className="text-xl font-bold mb-4">รายละเอียดกิจกรรม</h2>
            <p className="text-xl">ชื่อกิจกรรม : {selectedEvent.title}</p>
            <p>สถานที่ : {selectedEvent.location}</p>
            <p>เริ่มวันที่ : {selectedEvent.start.toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}</p>
            <p>สิ้นสุดวันที่ : {selectedEvent.end.toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}</p>
            <div className="text-end">
            <button className="btn px-2 py-1 bg-green-600 mt-4 text-center rounded-sm text-white" onClick={reservActivity}>
              จองกิจกรรม
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarFull;
