import { NavLink } from "react-router-dom";
import Logo from "../../assets/timelyimage.jpg";

const SideBar: React.FC = () => {
  return (
    <>
      <aside className="w-[18%] bg-white border-r border-gray-100 flex flex-col py-6 px-4 ">
        <div className="flex items-center mb-8">
          <img
            src={Logo}
            alt="Logo"
            className="w-[125px] h-[40px] mr-2 object-fill"
          />
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <NavLink to="/">
              <li className="flex items-center text-green-700 font-semibold bg-green-100 rounded-lg px-3 py-2">
                <span className="material-icons mr-2">My Schedule</span>
              </li>
            </NavLink>
            <NavLink to="/chat">
              <li className="flex items-center text-gray-600 hover:text-green-700 px-3 py-2 cursor-pointer">
                <span className="material-icons mr-2">Ai Chat</span>
                <span className="ml-auto bg-red-500 text-white rounded-full px-2 text-xs">
                  4
                </span>
              </li>
            </NavLink>
            <NavLink to="/upload">
              <li className="flex items-center text-gray-600 hover:text-green-700 px-3 py-2 cursor-pointer">
                <span className="material-icons mr-2">Uploads-Reminder</span>
              </li>
            </NavLink>
            <NavLink to="/quiz">
              <li className="flex items-center text-gray-600 hover:text-green-700 px-3 py-2 cursor-pointer">
                <span className="material-icons mr-2">Start Quiz</span>
                {/* <span className="ml-auto bg-green-100 text-green-700 rounded px-2 text-xs">Pro</span> */}
              </li>
            </NavLink>
            <NavLink to="/setting">
              <li className="flex items-center text-gray-600 hover:text-green-700 px-3 py-2 cursor-pointer">
                <span className="material-icons mr-2">Setting</span>
              </li>
            </NavLink>
            <NavLink to="/history">
              <li className="flex items-center text-gray-600 hover:text-green-700 px-3 py-2 cursor-pointer">
                <span className="material-icons mr-2">History</span>
              </li>
            </NavLink>
            <NavLink to="/logout">
              <li className="flex items-center text-gray-600 hover:text-green-700 px-3 py-2 cursor-pointer">
                <span className="material-icons mr-2">Logout</span>
              </li>
            </NavLink>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
