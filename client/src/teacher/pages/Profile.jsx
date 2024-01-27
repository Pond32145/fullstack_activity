import { useState, useEffect } from "react";

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

    <div className="w-full lg:w-2/3 mx-auto mt-10 p-10 bg-white shadow-md rounded-md">
      <div className="flex items-center gap-2 ml-1 mb-5">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="22" height="22"><path d="M9,12c-3.309,0-6-2.691-6-6S5.691,0,9,0s6,2.691,6,6-2.691,6-6,6Zm4.27,7.48c-.813,.813-1.27,1.915-1.27,3.065v1.455h1.455c1.15,0,2.252-.457,3.065-1.27l6.807-6.807c.897-.897,.897-2.353,0-3.25-.897-.897-2.353-.897-3.25,0l-6.807,6.807Zm-3.27,3.065c0-1.692,.659-3.283,1.855-4.479l2.376-2.376c-1.476-1.06-3.279-1.691-5.231-1.691C4.038,14,0,18.038,0,23c0,.552,.448,1,1,1H10v-1.455Z" /></svg>
        </div>
        <h3 className="text-2xl">แก้ไขประวัติส่วนตัว</h3>
      </div>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">


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
          <label htmlFor="zipcode" className="block text-sm font-medium text-gray-600">
            รหัสไปรษณีย์
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            className="mt-1 p-2 border w-full rounded-md" />
        </div>
        <div></div>
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            บันทึก
          </button>
        </div>
      </form>
    </div>

  );
};

export default StudentForm;
