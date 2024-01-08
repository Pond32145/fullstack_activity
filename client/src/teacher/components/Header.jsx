import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/IT_logo_Standard.png';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex flex-col md:flex-row bg-slate-200 px-4 place-content-between fixed top-0 w-full'>
      <div className='flex items-center justify-between container mx-auto px-10'>
        <Link to={"/"} className='flex flex-row mt-2 mb-2 items-center'>
          <img src={Logo} className='w-10' alt='IT Logo' />
          <h1 className="text-xl ml-3 font-bold text-white">Information Technology</h1>
        </Link>

        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          <svg
            className={`w-6 h-6 transition-transform duration-300 transform ${isMenuOpen ? 'rotate-0' : '-rotate-90'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </div>
      </div>

      <ul className={`md:flex transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} gap-4 mt-4 md:mt-1 items-center mx-20`}>
        <li>
          <Link to='/teacher/profile' className="text-white hover:text-gray-300">
            โปรไฟล์
          </Link>
        </li>
        <li>
          <Link to='/teacher/liststudent' className="text-white hover:text-gray-300">
            รายชื่อนักศึกษา
          </Link>
        </li>
        <li>
          <Link to='/another/link' className="text-white hover:text-gray-300">
            ลิงก์อื่นๆ
          </Link>
        </li>
      </ul>
    </header>
  );
}
