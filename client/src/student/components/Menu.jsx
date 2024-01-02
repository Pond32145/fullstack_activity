import { Link } from 'react-router-dom';
import Add from '../img/add.png';
import Calendar from '../img/calendar.png';
import History from '../img/history.png';
import Profile from '../img/profile.png';

function Menu() {

    return (
        <div>
            <div className={` top-0 left-0 md:flex md:flex-row md:items-start mt-3 mb-3 ml-10 gap-1`}>
                <Link to="/activity/card" >
                    <img className="h-auto w-14 cursor-pointer" src={Add} alt="Add" />
                </Link>
                <Link to="/activity/calendar" >
                    <img className="h-auto w-14 cursor-pointer" src={Calendar} alt="Calendar" />
                </Link>
                <Link to="/activity/history" >
                    <img className="h-auto w-14 cursor-pointer" src={History} alt="History" />
                </Link>
                <Link to="/activity/profile" >
                    <img className="h-auto w-14 cursor-pointer" src={Profile} alt="Profile" />
                </Link>
            </div>
        </div>
    );
}

export default Menu;
