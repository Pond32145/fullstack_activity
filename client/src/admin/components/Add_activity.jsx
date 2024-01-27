import { useState } from 'react';
import { SHA256 } from 'crypto-js';

function Add_Activity() {
  const [inputText, setInputText] = useState('');
  const [inputAmount, setInputAmount] = useState(1);
  const [hashedText, setHashedText] = useState('');
  const [inputLocation, setInputLocation] = useState('');
  const [inputStartDate, setStartDate] = useState('');
  const [inputEndDate, setEndDate] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAmountChange = (event) => {
    setInputAmount(event.target.value);
  };
  const handleLocation = (event) => {
    setInputLocation(event.target.value);
  };

  const StartDate = (event) => {
    setStartDate(event.target.value);
  };

  const EndDate = (event) => {
    setEndDate(event.target.value);
  };

  const handleHashClick = () => {
    let allHashes = '';

    for (let i = 1; i <= inputAmount; i++) {
      const uniqueInput = inputText + i;
      const hashedValue = SHA256(uniqueInput).toString();
      const upperActivtyCode = hashedValue.slice(-8).toUpperCase();

      const CodeData = {
        actName: inputText,
        actCode: upperActivtyCode,
        amount: inputAmount
      };

      fetch('http://localhost:3333/actcode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(CodeData)
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      allHashes += upperActivtyCode + '\n';
    }

    const activity = {
      actName: inputText,
      amount: inputAmount,
      location: inputLocation,
      startDate: inputStartDate,
      endDate: inputEndDate
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

    setHashedText(allHashes);
  };

  const showSweetAlert = () => {
    Swal.fire({
      title: 'Hashed Texts',
      html: `<pre>${hashedText}</pre>`,
      confirmButtonText: 'OK',
    });
  };
  

  return (
    <div className="max-w-md mx-auto my-10 p-6  rounded-md">
      <h1 className='text-xl font-bold text-center mb-5'>เพิ่มข้อมูลกิจกรรม</h1>
      <div className='flex items-center '>
        <label className="block mb-2 text-lg text-gray-600 w-1/4 text-left pb-2">ชื่อกิจกรรม :</label>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-1 mb-4 w-3/4"
        />
      </div>
      <div className='flex items-center'>
        <label className="block mb-2 text-lg text-gray-600 w-1/4 text-left pb-2">จำนวน :</label>
        <input
          type="text"
          value={inputAmount}
          onChange={handleAmountChange}
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
          onChange={StartDate}
          className="border border-gray-300 rounded-md p-1 mb-4 w-3/4"
        />
      </div>

      <div className="flex items-center">
        <label className="block mb-2 text-lg text-gray-600 w-1/4 text-left pb-2">สิ้นสุดวันที่ :</label>
        <input
          type="datetime-local"
          value={inputEndDate}
          onChange={EndDate}
          className="border border-gray-300 rounded-md p-1 mb-4 w-3/4"
        />
      </div>


      <button
        onClick={handleHashClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Hash
      </button>

      
      {hashedText && (
        <div className="mt-4">
          {/* <p className="text-sm text-gray-600">All Hashed Texts:</p> */}
          {/* <pre className="font-mono text-sm whitespace-pre-line">{hashedText}</pre> */}

          {/* เพิ่ม SweetAlert ตรงนี้ */}
          {/* <button onClick={showSweetAlert}>Show SweetAlert</button> */}
        </div>
      )}

    </div>
  );
}

export default Add_Activity;
