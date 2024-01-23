// PrivateRoute.jsx
import React, { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem('token');

  useEffect(() => {
    // ตรวจสอบ token ที่ localStorage
    if (!token) {
      // ถ้าไม่มี token, redirect ไปยังหน้า login หรือทำตามที่คุณต้องการ
      window.location.href = '/login';
    }
  }, [token]);

  return token ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;