import { NavLink } from "react-router-dom";
import Logo from "../../assets/timelyimage.jpg";
import { IoSettingsOutline } from "react-icons/io5";
import { BsChatSquareText } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";

const SideBar: React.FC = () => {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-[18%] bg-white border-r border-gray-100 flex flex-col py-6 px-4">
        <div className="flex items-center mb-8">
          <img
            src={Logo}
            alt="Logo"
            className="w-[125px] h-[40px] mr-2 object-fill"
          />
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-100 text-green-700 font-semibold rounded-lg"
                  : "text-gray-600 hover:bg-green-800 hover:text-green-700"
              }
            >
              <li className="flex items-center px-3 py-2 cursor-pointer transition duration-300">
                <span className="material-icons mr-2">My Schedule</span>
              </li>
            </NavLink>
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-100 text-green-700 font-semibold rounded-lg"
                  : "text-gray-600 hover:bg-green-800 hover:text-green-700"
              }
            >
              <li className="flex items-center px-3 py-2 cursor-pointer transition duration-300">
                {<BsChatSquareText className="mr-2" />}
                <span className="material-icons mr-2">Ai Chat</span>
                <span className="ml-auto bg-red-500 text-white rounded-full px-2 text-xs">
                  4
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/upload"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-100 text-green-700 font-semibold rounded-lg"
                  : "text-gray-600 hover:bg-green-800  hover:text-green-700"
              }
            >
              <li className="flex items-center px-3 py-2 cursor-pointer transition duration-300">
                {<IoDocumentTextOutline className="mr-2" />}
                <span className="material-icons mr-2">Uploads-Reminder</span>
              </li>
            </NavLink>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-100 text-green-700 font-semibold rounded-lg"
                  : "text-gray-600 hover:bg-green-800 hover: hover:text-green-700"
              }
            >
              <li className="flex items-center px-3 py-2 cursor-pointer transition duration-300">
                {<MdOutlineQuiz className="mr-2" />}
                <span className="material-icons mr-2">Start Quiz</span>
              </li>
            </NavLink>
            <NavLink
              to="/setting"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-100 text-green-700 font-semibold rounded-lg"
                  : "text-gray-600 hover:bg-green-800 hover:text-green-800"
              }
            >
              <li className="flex items-center px-3 py-2 cursor-pointer transition duration-300">
                {<IoSettingsOutline className="mr-2" />}
                <span className="material-icons mr-2">Setting</span>
              </li>
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-100 text-green-700 font-semibold rounded-lg"
                  : "text-gray-600 hover:bg-green-800 hover:text-green-800"
              }
            >
              <li className="flex items-center px-3 py-2 cursor-pointer transition duration-300">
                {<GoHistory className="mr-2" />}
                <span className="material-icons mr-2">History</span>
              </li>
            </NavLink>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-100 text-green-700 font-semibold rounded-lg"
                  : "text-gray-600 hover:bg-green-800 hover:text-green-800"
              }
            >
              <li className="flex items-center px-3 py-2 cursor-pointer transition duration-300">
                {<IoLogOutOutline className="mr-2" />}
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