import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const token = localStorage.getItem('token');
  const authToken = token;
  const history = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!authToken) {
          // กรณีไม่มี token ให้เด้งไปที่หน้าล็อคอิน
          history('/');
          return;
        }

        const response = await fetch('http://localhost:3333/api/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          // กรณีไม่สามารถดึงข้อมูลผู้ใช้ได้
          // ให้ทำการล็อกเอาท์และเด้งไปหน้าล็อกอิน
          localStorage.removeItem('token');
          history.push('/');
          return;
        }

        const data = await response.json();

        if (data && data.username) {
          setLoggedInUser(data.username);
        } else {
          console.error('ได้รับข้อมูลผู้ใช้ที่ไม่ถูกต้อง');
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้:', error.message);
      }
    };

    fetchUserData();
  }, [authToken, history]);

  const handleLogout = () => {
    // ลบโทเคนและเด้งไปที่หน้าล็อกอิน
    localStorage.removeItem('token');
    history('/');
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <p>ผู้ใช้ที่ล็อกอิน: {loggedInUser}</p>
          </div>
          ) : (
            <p>กำลังโหลดข้อมูลผู้ใช้...</p>
            )}
            <button onClick={handleLogout}>ล็อกเอาท์</button>
    </div>
  );
};

export default UserInfo;
