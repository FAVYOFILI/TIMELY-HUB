import { Outlet } from "react-router-dom";
import SideBar from "./StaticLayout/SideBar";
import RightBar from "./StaticLayout/RightBar";

const PageLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <SideBar />

      <main className="flex-1 flex flex-col px-8 py-6 overflow-hidden">
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full bg-gray-100 border-gray-100 border focus:outline-none"
          />
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </main>

      <RightBar />
    </div>
  );
};

export default PageLayout;
