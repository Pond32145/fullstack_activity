// import React, { useState } from 'react';

const Add_Users = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
        username: data.get('username'),
        password: data.get('password'),
        fname: data.get('fname'),
        lname: data.get('lname'),
        section: data.get('section'),
   
        // role: data.get('role'),
    }
    fetch('http://localhost:3333/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })

      .then(data => {
        if (data.status === 'ok') {
          alert('register sucess')
          localStorage.setItem('token', data.token)
        //   window.location ='/album'
        } else {
          alert('register failed')
          console.log("error", data);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
 
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md grid grid-cols-2 gap-2">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 col-span-2">เพิ่มข้อมูล</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            id="username"
            name="username"
          
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
   
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fname" className="block text-sm font-medium text-gray-600">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"

            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lname" className="block text-sm font-medium text-gray-600">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"

            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4 col-span-2">
          <label htmlFor="section" className="block text-sm font-medium text-gray-600">Section</label>
          <input
            type="text"
            id="section"
            name="section"

            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

     

        <div className="mt-6">
          <button type="submit" className=" w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-300">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add_Users;
