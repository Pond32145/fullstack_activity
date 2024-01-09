// StudentForm.js

import { useState, useEffect } from "react";

// import React from 'react';



const StudentForm = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // กำหนด URL ของ API ที่สร้างด้วย Node.js
    const apiUrl = 'http://localhost:3333/api/user';  // ปรับ URL ตามที่คุณใช้

    // ทำ HTTP request ด้วย fetch
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setUserData(data);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาด: ', error);
      });
  }, []);
   // ว่างเพื่อให้ useEffect ทำงานเพียงครั้งเดียวหลังจากคอมโพเนนต์นี้ถูกตรงกัน



  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex w-4/5 mx-auto shadow-xl rounded-lg bg-slate-100 p-5">
      <div className=" w-1/3">

      </div>
      <div className="w-2/3 mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
        <form className="grid grid-cols-2 gap-4">

          <div className="mb-4">
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-600">
              รหัสนักศึกษา
            </label>
            <input
              type="text"
              id="username"
              name="username"
              // value={data && data[0] && data[0].username ? data[0].username : ''}
              value={userData.username}
              className="mt-1 p-2 border w-full rounded-md" />
          </div>
   

          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              ชื่อ
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="mt-1 p-2 border w-full rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              นามสกุล
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="mt-1 p-2 border w-full rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="classGroup" className="block text-sm font-medium text-gray-600">
              หมู่เรียน
            </label>
            <input
              type="text"
              id="section"
              name="section"
              className="mt-1 p-2 border w-full rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              เบอร์โทร
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              className="mt-1 p-2 border w-full rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-600">
              วันเกิด
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              className="mt-1 p-2 border w-full rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              ที่อยู่
            </label>
            <input
              id="address"
              name="address"
              className="mt-1 p-2 border w-full rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="district" className="block text-sm font-medium text-gray-600">
              อำเภอ
            </label>
            <input
              type="text"
              id="district"
              name="district"
              className="mt-1 p-2 border w-full rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="province" className="block text-sm font-medium text-gray-600">
              จังหวัด
            </label>
            <input
              type="text"
              id="province"
              name="province"
              className="mt-1 p-2 border w-full rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-600">
              รหัสไปรษณีย์
            </label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              className="mt-1 p-2 border w-full rounded-md" />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
