import { useState, useEffect } from 'react'

import Popup from './Popup_addUser';

function Dash_users() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [countStudentRoles, setCountStudentRoles] = useState(0);
  const [countTeacherRoles, setCountTeacherRoles] = useState(0);
  const [countAdminRoles, setCountAdminRoles] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3333/api/user")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);

          // กรองข้อมูลที่มี role เป็น "student" เท่านั้น
          const filteredItems = result.filter((item) => item.role === "student");
          const filteredItemsTeacher = result.filter((item) => item.role === "teacher");
          const filteredItemsAdmin = result.filter((item) => item.role === "admin");

          // นับจำนวนข้อมูลที่มี role เป็น "student"
          const countRoles = filteredItems.length;
          setCountStudentRoles(countRoles);
          console.log(`มี role เป็น "student" ทั้งหมด: ${countRoles}`);

          // นับจำนวนข้อมูลที่มี role เป็น "teacher"
          const countRolesTeacher = filteredItemsTeacher.length;
          setCountTeacherRoles(countRolesTeacher);
          console.log(`มี role เป็น "teacher" ทั้งหมด: ${countRolesTeacher}`);

          // นับจำนวนข้อมูลที่มี role เป็น "admin"
          const countRolesAdmin = filteredItemsAdmin.length;
          setCountAdminRoles(countRolesAdmin);
          console.log(`มี role เป็น "admin" ทั้งหมด: ${countRolesAdmin}`);

          // ตั้งค่า state ด้วยข้อมูลทั้งหมด
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className='container mx-auto px-10 md:px-20 mb-5'>
      <div>

        {isLoaded ? (

          <div>
          
            <div className='flex justify-between items-center'>
              <h2 className='text-xl font-bold'>การจัดการผู้ใช้งาน</h2>
              <Popup />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pr-2 pl-2 pt-3">
              <div className="bg-blue-500 p-4 text-white h-28 rounded-md shadow-lg flex flex-col justify-center items-center transition-all hover:bg-blue-600">
                <div className='text-2xl flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>

                  <div className='text-sm font-semibold'>จำนวนผู้ใช้ทั้งหมด</div>
                </div>
                <div className='text-center text-4xl font-bold'>{items.length}</div>
              </div>

              <div className="bg-green-500 p-4 text-white h-28 rounded-md shadow-lg flex flex-col justify-center items-center transition-all hover:bg-green-600">
                <p className='text-sm font-semibold'>จำนวนนักศึกษา</p>
                <div className='text-center text-4xl font-bold'>{countStudentRoles}</div>
              </div>

              <div className="bg-green-500 p-4 text-white h-28 rounded-md shadow-lg flex flex-col justify-center items-center transition-all hover:bg-green-600">
                <p className='text-sm font-semibold'>จำนวนอาจารย์</p>
                <div className='text-center text-4xl font-bold'>{countTeacherRoles}</div>
              </div>

              <div className="bg-red-500 p-4 text-white h-28 rounded-md shadow-lg flex flex-col justify-center items-center transition-all hover:bg-red-600">
                <p className='text-sm font-semibold'>จำนวนผู้ดูแลระบบ</p>
                <div className='text-center text-4xl font-bold'>{countAdminRoles}</div>
              </div>
            </div>




          </div>
        ) : (
          <p>Loading...</p>
        )}

        {error && (
          <div>
            <h2>Error</h2>
            <p>{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dash_users