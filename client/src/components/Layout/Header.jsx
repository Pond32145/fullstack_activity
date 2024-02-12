
import Logo from '../../images/IT_logo_Standard.png';
import Login from '../../components/Login_btn';

const Header = () => {



  return (
    <div className="3xl:container 3xl:mx-auto fixed top-0 w-full">
      <div className="bg-white rounded shadow-lg py-5 px-7 md:pl-28 md:pr-28">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <img src={Logo} className='w-10' alt='IT Logo' />
            <h2 className="font-bold text-md  leading-6 text-gray-800">INFORMATION  TECHNOLOGY</h2>
          </div>
     
          <Login />

        </nav>

     
      </div>
    </div>
  );
}

export default Header;
