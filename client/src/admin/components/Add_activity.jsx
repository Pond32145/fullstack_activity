import { useState } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

function Add_Activity({ closeModal }) {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [inputNumStd, setInputNumStd] = useState(1);
  const [inputLocation, setInputLocation] = useState('');
  const [inputStartDate, setStartDate] = useState('');
  const [inputEndDate, setEndDate] = useState('');

  const handleTitle = (event) => {
    setInputTitle(event.target.value);
  };
  const handleDesc = (event) => {
    setInputDesc(event.target.value);
  };

  const handleNumStd = (event) => {
    setInputNumStd(event.target.value);
  };
  const handleLocation = (event) => {
    setInputLocation(event.target.value);
  };

  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = () => {

    const activity = {
      Act_Title: inputTitle,
      Act_Desc: inputDesc,
      Act_DateStart: inputStartDate,
      Act_DateEnd: inputEndDate,
      Act_NumStd: inputNumStd,
      Act_Location: inputLocation,
      
    };

    fetch('http://localhost:3333/activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(activity)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    
  };

  // const showSweetAlert = () => {
  //   Swal.fire({
  //     title: 'Hashed Texts',
  //     html: `<pre>${hashedText}</pre>`,
  //     confirmButtonText: 'OK',
  //   });
  // };


  return (
    <div className="max-w-md mx-auto my-10 p-6  rounded-md">
      <div></div>
      <div className="cursor-pointer justify-between flex" onClick={closeModal}>
        <div></div>
        <CloseIcon />
      </div>
      <h1 className='text-xl font-bold text-center mb-5'>เพิ่มข้อมูลกิจกรรม</h1>

      <div className='flex items-center '>
        <label className="block mb-2 text-lg text-gray-600 w-1/4 text-left pb-2">ชื่อกิจกรรม :</label>
        <input
          type="text"
          value={inputTitle}
          onChange={handleTitle}
          className="border border-gray-300 rounded-md p-1 mb-4 w-3/4"
        />
      </div>
      
      <div className='flex items-center '>
        <label className="block mb-2 text-lg text-gray-600 w-1/4 text-left pb-2">รายละเอียดกิจกรรม :</label>
        <input
          type="text"
          value={inputDesc}
          onChange={handleDesc}
          className="border border-gray-300 rounded-md p-1 mb-4 w-3/4"
        />
      </div>

      <div className='flex items-center'>
        <label className="block mb-2 text-lg text-gray-600 w-1/4 text-left pb-2">จำนวน :</label>
        <input
          type="number"
          value={inputNumStd}
          onChange={handleNumStd}
          className="border border-gray-300 rounded-md p-1 mb-4 w-3/4"
        />
      </div>
      <div className='flex items-center'>
        <label className="block mb-2 text-lg text-gray-600 w-1/4 text-left pb-2">สถานที่ :</label>
        <input
          type="text"
          value={inputLocation}
          onChange={handleLocation}
          className="border border-gray-300 rounded-md p-1 mb-4 w-3/4"
        />
      </div>

      <div className="flex items-center">

        <label className="block mb-2 text-lg text-gray-600 w-1/4 text-left pb-2">เริ่มวันที่ :</label>
        <input
          type="datetime-local"
          value={inputStartDate}
          onChange={handleStartDate}
          className="border border-gray-300 rounded-md p-1 mb-4 w-3/4"
        />
      </div>

      <div className="flex items-center">
        <label className="block mb-2 text-lg text-gray-600 w-1/4 text-left pb-2">สิ้นสุดวันที่ :</label>
        <input
          type="datetime-local"
          value={inputEndDate}
          onChange={handleEndDate}
          className="border border-gray-300 rounded-md p-1 mb-4 w-3/4"
        />
      </div>


      <button
        onClick={handleSubmit}
        className="bg-blue-500 ml-32 my-2  text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        เพิ่มข้อมูลกิจกรรม
      </button>

    </div>
  );
}


Add_Activity.propTypes = {
  closeModal: PropTypes.func.isRequired,
};


export default Add_Activity;