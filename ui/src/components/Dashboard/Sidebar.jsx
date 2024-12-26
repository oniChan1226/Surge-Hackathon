import {
  LayoutDashboard,
  Logs,
  HandHelping,
  Leaf,
  HandHeart,
  Mails,
  Settings,
  Settings2,
  Download,
  LogOut,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { navConfig } from "../../RoleConfigs";

const Sidebar = ({ role = "individual" }) => {
  const navItems = navConfig["individual"] || [];

  return (
    <div className="min-h-screen fixed left-0 bg-white text-white hidden md:flex justify-center overflow-hidden">
      <nav className="px-3 pt-5">
        <ul className="">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item?.to || "#"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-dashboardMain-blue shadow-md"
                    : "text-black hover:text-dashboardMain-blue"
                } flex items-center  py-4 pl-2 sm:pr-8 lg:pr-14 text-base xl:text-xl rounded-md font-normal transition shadow-dashboardMain-purplish whitespace-nowrap`
              }
            >
              <div className="flex-shrink-0 w-1/3">
                {item.icon && <item.icon />}
              </div>
              <div className="w-2/3">{item.label || "Label"}</div>
            </NavLink>
          ))}
<div className="h-[1px] bg-dashboardMain-unhighlighted w-full"/>
          <NavLink
            to={"/setting"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-dashboardMain-blue shadow-md"
                  : "text-black hover:text-dashboardMain-blue"
              } flex items-center  py-4 pl-2 sm:pr-8 lg:pr-14 text-base xl:text-xl rounded-md font-normal transition shadow-dashboardMain-purplish whitespace-nowrap`
            }
          >
            <div className="flex-shrink-0 w-1/3">
            <Settings />
            </div>
            <div className="w-2/3">
            Settings
            </div>
          </NavLink>
          <div
            className={`flex items-center text-black hover:text-dashboardMain-blue cursor-pointer py-4 pl-2 sm:pr-8 lg:pr-14 text-base xl:text-xl rounded-md font-normal transition shadow-dashboardMain-purplish whitespace-nowrap`}
          >
            <div className="flex-shrink-0 w-1/3">
            <LogOut />
            </div>
            <div className="w-2/3">
            Log out
            </div>
          </div>
        </ul>
      </nav>

      {/* <div className='w-[.5px] bg-dashboardMain-unhighlighted'></div> */}
    </div>
  );
};

export default Sidebar;
