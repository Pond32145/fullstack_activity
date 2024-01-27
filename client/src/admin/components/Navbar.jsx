import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/IT_logo_Standard.png';
import Logout from '../../components/Logout';

const NavBar = () => {
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
    // const getItemLogout = (itemName) => `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-red-600 border border-white bg-grey-500 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded ${selectedItem === itemName ? 'bg-red-600 text-white' : 'bg-gray-50 text-gray-600 border border-white'}`;

    const getItemClassXs = () => `px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal`
    const getItemLogoutXs = (itemName) => `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-bold text-red-500 border border-white bg-grey-500 cursor-pointer px-3 py-2.5 text-xs leading-3 shadow-md rounded ${selectedItem === itemName ? 'bg-red-600 text-white' : 'bg-gray-50 text-gray-600 border border-white'}`;



    return (
        <div className="3xl:container 3xl:mx-auto">
            <div className="bg-white rounded shadow-lg py-5 px-7 md:pl-28 md:pr-28">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <img src={Logo} className='w-10' alt='IT Logo' />
                        <h2 className="font-bold text-md  leading-6 text-gray-800">ADMIN Dashboard</h2>
                    </div>
                    <ul className="hidden md:flex flex-auto space-x-2 items-center justify-center">
                        <Link to='/admin/dashboard'>
                            <li onClick={() => handleItemClick('Dashboard')}
                                className={getItemClass('Dashboard')}>Dashboard</li>
                        </Link>
                        <Link to='/admin/activity'>
                            <li onClick={() => handleItemClick('Activity')}
                                className={getItemClass('Activity')}>กิจกรรม</li>
                        </Link>
                        <Link to='/admin/calendar'>
                            <li onClick={() => handleItemClick('Calendar')}
                                className={getItemClass('Calendar')}>ปฏิทินกิจกรรม</li>
                        </Link>
                        <Link to='/admin/wallet'>
                            <li onClick={() => handleItemClick('Wallet')}
                                className={getItemClass('Wallet')}>Metamask</li>
                        </Link>

                        {/* <li ></li> */}

                        {/* Add similar li elements for other menu items */}
                    </ul>
                    <Logout />

                    {/* <button onClick={handleLogout} className={getItemLogout}>ออกจากระบบ</button> */}



                    {/* <div className=" flex space-x-5 justify-center items-center pl-2">
                        <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#1F2937" />
                            </svg>
                            <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
                            <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
                        </div>

                        <svg className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#1F2937" />
                            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#1F2937" />
                        </svg>
                    </div> */}
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
                            <Link to='/admin/dashboard'>
                                <li onClick={() => handleItemClick('Dashboard')}
                                    className={getItemClassXs('Dashboard')}>Dashboard</li>
                            </Link>
                            <Link to='/admin/calendar'>
                                <li onClick={() => handleItemClick('ปฏิทินกิจกรรม')}
                                    className={getItemClassXs('Calendar')}>ปฏิทินกิจกรรม</li>
                            </Link>

                            <Link to='/admin/profile'>
                                <li onClick={() => handleItemClick('ประวัติส่วนตัว')}
                                    className={getItemClassXs('Profile')}>ประวัติส่วนตัว</li>
                            </Link>

                            <li onClick={() => handleItemClick('Logout')} className={getItemLogoutXs('Logout')}>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;