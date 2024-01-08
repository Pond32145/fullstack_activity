import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/IT_logo_Standard.png'




export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);



  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };



  return (
    <header className='flex flex-col md:flex-row bg-slate-200 px-3 place-content-between fixed top-0 w-full'>
      <div className='flex items-center justify-between'>
        <Link to={"/"} className='flex flex-row mt-2 mb-2 ml-5 lg:ml-0'>
          <img src={Logo} className='w-10' />
          <h1 className="text-xl ml-5 font-bold">
            Information Technology
          </h1>
        </Link>

        <div
          className='md:hidden cursor-pointer'
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 transform ${isMenuOpen ? 'rotate-0' : '-rotate-90'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            ></path>
          </svg>
        </div>
      </div>

      <ul className={`md:flex transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} gap-4 mt-4 md:mt-3 item-center  pr-10`}>

          <li>asas</li>
          <li>asas</li>
          <li>asas</li>

      </ul>
    </header>
  );
}

