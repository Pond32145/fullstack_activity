import { Link } from 'react-router-dom';
import Add from '../img/add.png';
import Calendar from '../img/calendar.png';
import History from '../img/history.png';
import Profile from '../img/profile.png';

function Home() {
  return (
    <div className='flex justify-center  font-mono'>

    <div className="flex flex-wrap justify-center items-center p-10 m-8 mt-16 border-2 bg-green-300 rounded-2xl w-2/3 shadow-xl">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8">
        <Link to="/activity/card" className="text-center p-4  transition-transform transform hover:scale-105">
        <img className="h-auto w-32 mb-4 mx-auto" src={Add} alt="Add" />
        <p className="text-lg font-semibold">กรอกข้อมูลกิจกรรม</p>
        <p className="text-sm">Activity Card</p>
        </Link>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8">
        <Link to="/activity/calendar" className="text-center p-4  transition-transform transform hover:scale-105">
          <img className="h-auto w-32 mb-4 mx-auto" src={Calendar} alt="Calendar" />
          <p className="text-lg font-semibold">กรอกข้อมูลกิจกรรม</p>
          <p className="text-sm">Activity Calendar</p>
        </Link>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8">
        <Link to="/activity/history" className="text-center p-4  transition-transform transform hover:scale-105">
          <img className="h-auto w-32 mb-4 mx-auto" src={History} alt="History" />
          <p className="text-lg font-semibold">กรอกข้อมูลกิจกรรม</p>
          <p className="text-sm">Activity History</p>
        </Link>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8">
        <Link to="/activity/profile" className="text-center p-4  transition-transform transform hover:scale-105">
          <img className="h-auto w-32 mb-4 mx-auto" src={Profile} alt="Profile" />
          <p className="text-lg font-semibold">กรอกข้อมูลกิจกรรม</p>
          <p className="text-sm">User Profile</p>
        </Link>
      </div>

      
    </div>
    </div>
  );
}

export default Home;
