import React, { useState, useEffect } from "react";
import Modal from 'react-awesome-modal';
import Update_user from "./Update_user";

function Popup({ onClose, userParams }) {
  const [userData, setUserData] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const apiUrl = 'http://localhost:3333/api/userO?username=' + userParams;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล');
        }
        return response.json();
      })
      .then(data => {
        setUserData(data);
        setVisible(true);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาด: ', error);
      });
  }, [userParams]);

  const closeModal = () => {
    setVisible(false);
    onClose();
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Modal visible={visible} width="500" height="500" effect="fadeInUp" onClickAway={closeModal}>
      <div className="w-full lg:w-2/3 mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
        {/* ส่งข้อมูลที่ถูกเลือกไปยัง Update_user */}
        <Update_user userData={userData} />
        <div className="flex justify-end">
          <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            ปิด
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Popup;
