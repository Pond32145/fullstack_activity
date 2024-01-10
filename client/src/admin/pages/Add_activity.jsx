import { useState } from 'react';
import { SHA256 } from 'crypto-js';

function Add_Activity() {
  const [inputText, setInputText] = useState('');
  const [inputAmount, setInputAmount] = useState(1);
  const [hashedText, setHashedText] = useState('');
  const [inputStartDate, setStartDate] = useState('');
  const [inputEndDate, setEndDate] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAmountChange = (event) => {
    setInputAmount(event.target.value);
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
        actCode: upperActivtyCode
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

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <label className="block mb-2 text-sm text-gray-600">Enter Text:</label>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />

      <label className="block mb-2 text-sm text-gray-600">Enter Amount:</label>
      <input
        type="text"
        value={inputAmount}
        onChange={handleAmountChange}
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />

      <div className="flex justify-between mb-4">
        <div className="w-1/2 mr-2">
          <label className="block mb-2 text-sm text-gray-600">Start Date:</label>
          <input
            type="datetime-local"
            value={inputStartDate}
            onChange={StartDate}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="w-1/2 ml-2">
          <label className="block mb-2 text-sm text-gray-600">End Date:</label>
          <input
            type="datetime-local"
            value={inputEndDate}
            onChange={EndDate}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      <button
        onClick={handleHashClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Hash
      </button>

      {hashedText && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">All Hashed Texts:</p>
          <pre className="font-mono text-sm whitespace-pre-line">{hashedText}</pre>
        </div>
      )}
    </div>
  );
}

export default Add_Activity;
