import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/IT_logo_Standard.png'



export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    fetch("http://localhost:3333/api/user"
    , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          const loggedInUser = result.find(user => user.isLoggedIn === true);
          setUser(loggedInUser ? [loggedInUser] : []);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return (
      <header className='flex flex-col md:flex-row bg-slate-200 px-3 pt-4 pb-3  place-content-between fixed top-0 w-full'>
        <div className='flex items-center justify-between'>
          <Link to={"/"} className='flex flex-row ml-10'>
            <img src={Logo} className='w-12' />
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

        <ul className={`md:flex transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} gap-4 mt-4 md:mt-0`}>

        {user.map(user => (
          user.isLoggedIn && (
            <li key={user.username}>
              {user.username} {user.fname}
            </li>
          )
        ))}
        </ul>
      </header>
    );
  }
}
