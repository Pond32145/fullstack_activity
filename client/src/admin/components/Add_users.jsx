// import React, { useState } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';


const Add_Users = ({ closeModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      login_ID: data.get('Login_ID'),
      username: data.get('username'),
      password: data.get('password'),
      role: data.get('role')
    };

    fetch('http://localhost:3333/create', {
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
          Swal.fire({
            icon: 'success',
            title: 'เพิ่มข้อมูลสำเร็จ!',
            showConfirmButton: false,
            timer: 1500
          });
          closeModal();
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
  };



  return (
    <div className="flex justify-center items-center  bg-gray-100 rounded-lg ">
      <form onSubmit={handleSubmit} className="p-8 rounded shadow-md grid grid-cols-2 gap-2">
        <div></div>
        <div className="cursor-pointer justify-between flex" onClick={closeModal}>
          <div></div>
          <CloseIcon />
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 col-span-2 text-center">เพิ่มผู้ใช้</h2>

        <div className="mb-4">
          <label htmlFor="Login_ID" className="block text-sm font-medium text-gray-600">Login_ID</label>
          <input
            type="text"
            id="Login_ID"
            name="Login_ID"

            className="mt-1 p-1 w-full border-b-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            id="username"
            name="username"

            className="mt-1 p-1 w-full border-b-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"

            className="mt-1 p-1 w-full border-b-2 rounded-md"
          />
        </div>

       

        <div className="mb-4 col-span-2">
          <label htmlFor="section" className="block text-sm font-medium text-gray-600">Role</label>
          <select id="role" name="role" className="mt-1 p-1 w-full border-b-2 rounded-md">
            <option value="">Select an Role</option>
            <option value="student">student</option>
            <option value="teacher">teacher</option>
            <option value="admin">admin</option>

          </select>
        </div>


        <div></div>
        <div className="text-right">
          <button type="submit" className=" w-fit p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-300">
            เพิ่มข้อมูล
          </button>
        </div>


      </form>
    </div>
  );
};


Add_Users.propTypes = {
  closeModal: PropTypes.func.isRequired,
};


export default Add_Users;
