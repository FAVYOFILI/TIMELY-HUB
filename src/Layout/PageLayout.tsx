import { Outlet } from "react-router-dom";
import SideBar from "./StaticLayout/SideBar";
import RightBar from "./StaticLayout/RightBar";

const PageLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden"> {/* Added overflow-hidden to prevent any scroll */}
      {/* Sidebar */}
      <SideBar/>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-8 py-6 overflow-hidden">
        {/* Static Search Bar */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full bg-gray-100 border-gray-100 border focus:outline-none"
          />
        </div>
        
        {/* Routed Content - No overflow allowed */}
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
      
      <RightBar/>
    </div>
  );
};

export default PageLayout;