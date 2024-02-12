import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/IT_logo_Standard.png';
import Logout from '../../components/Logout';

const Header = () => {
  const [username, setUsername] = useState('');
  // const [fnameValue, setFnameValue] = useState();

  const userParams = localStorage.getItem('userParams');

  useEffect(() => {
    // กำหนด URL ของ API ที่สร้างด้วย Node.js
    const apiUrl = 'http://localhost:3333/api/userO?id=';  // ปรับ URL ตามที่คุณใช้

    // ทำ HTTP request ด้วย fetch 
    fetch(apiUrl + userParams)
      .then(response => {
        if (!response.ok) {
          throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setUsername(data.username)
        // setFnameValue(data.fnameValue);


      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาด: ', error);
      });

  }, [userParams]);


  const [selectedItem, setSelectedItem] = useState('ปฏิทินกิจกรรม');
  const [isListVisible, setListVisible] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setListVisible(false);
  };

  const toggleListVisibility = () => {
    setListVisible(prevState => !prevState);
  };

  const getItemClass = (itemName) => `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded ${selectedItem === itemName ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-600 border border-white'}`;

  const getItemClassXs = () => `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal`




  return (
    <div className="3xl:container 3xl:mx-auto">
      <div className="bg-white rounded shadow-lg py-5 px-7 md:pl-28 md:pr-28">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <img src={Logo} className='w-10' alt='IT Logo' />
            <h2 className="font-bold text-md  leading-6 text-gray-800">INFORMATION  TECHNOLOGY</h2>
          </div>
          <ul className="hidden md:flex flex-auto space-x-2 items-center justify-center">

            <Link to='/activity/calendar'>
              <li onClick={() => handleItemClick('Calendar')}
                className={getItemClass('Calendar')}>หน้าแรก</li>
            </Link>

            <Link to='/activity/profile'>
              <li onClick={() => handleItemClick('Profile')}
                className={getItemClass('Profile')}>ประวัติส่วนตัว</li>
            </Link>

            <Link to='/activity/dashboard'>
              <li onClick={() => handleItemClick('listStudent')}
                className={getItemClass('listStudent')}>กิจกรรม</li>
            </Link>

          </ul>
          <div className='flex items-center gap-5'>
            <p className='hidden md:block'>{username}</p>
            <Logout className='block md:hidden' />
          </div>

        </nav>

        <div className="relative block md:hidden w-full mt-5 ">
          <div onClick={toggleListVisibility} className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
            <div className="flex space-x-2">
              <span id="s1" className={`font-semibold text-sm leading-3 ${isListVisible ? '' : 'hidden'}`}>Selected: </span>
              <p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer">{selectedItem}</p>
            </div>
            <svg id="ArrowSVG" className={`transform ${isListVisible ? 'rotate-180' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="white" />
            </svg>
          </div>

          <div className="relative">
            <ul id="list" className={`relative font-normal text-base leading-4 top-2 w-full rounded shadow-md transition-all duration-700 ${isListVisible ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 hidden'}`}>
              <Link to='/activity/calendar'>
                <li onClick={() => handleItemClick('ปฏิทินกิจกรรม')}
                  className={getItemClassXs('Calendar')}>ปฏิทินกิจกรรม</li>
              </Link>
              <Link to='/activity/liststudent'>
                <li onClick={() => handleItemClick('รายชื่อนักศึกษา')}
                  className={getItemClassXs('listStudent')}>รายชื่อนักศึกษา</li>
              </Link>
              <Link to='/activity/profile'>
                <li onClick={() => handleItemClick('ประวัติส่วนตัว')}
                  className={getItemClassXs('Profile')}>ประวัติส่วนตัว</li>
              </Link>


            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
