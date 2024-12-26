import React, { useEffect, useRef, useState } from "react";
import {
  User,
  ChevronDown,
  UserCog,
  LogOut,
  RefreshCw,
  X,
  Search,
} from "lucide-react";
import {user} from "../../RoleConfigs"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const accountMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if(accountMenuRef.current && !accountMenuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="sticky top-0 bg-white z-50">
      <div className=" flex justify-between items-center w-[95%] mx-auto py-4 md:py-5 text-dashboardMain-blackish ">
        <div className="left flex justify-center items-center md:space-x-6 space-x-1">
          <h2 className="text-xl md:text-2xl xl:text-4xl tracking-normal font-bold hidden md:block text-black">
            <span className="text-dashboardMain-blue">Disaster</span>
            Relief
          </h2>
          <div className="relative group">
            {/* Accessible Label */}
            <label
              htmlFor="search"
              className="absolute top-[6px] left-8 text-dashboardMain-unhighlighted pointer-events-none group-focus-within:hidden"
            >
              Search
            </label>

            {/* Search Input */}
            <input
              type="search"
              name="search"
              id="search"
              className="px-2 py-1 w-32 md:w-64 xl:w-72 outline-none border border-dashboardMain-unhighlighted rounded-md focus:border-dashboardMain-blue z-10 bg-dashboardMain-unhighlighted_2"
              placeholder=""
            />

            {/* Search Icon */}
            <Search className="text-dashboardMain-unhighlighted absolute top-[5px] left-1 group-focus-within:hidden z-0" />
          </div>
        </div>

        <div
          id="userAccount"
          className="flex justify-center items-center space-x-3 relative"
        >
          <div>
            {/* <User
              className="text-dashboardMain-blue bg-dashboardMain rounded-full"
              size={35}
            /> */}
            <img src={user.avatar} alt="" className="h-10 md:h-12 xl:h-14 rounded-full bg-dashboardMain object-center"/>
          </div>

          <div className="flex flex-col items-start">
            <h5 className="md:text-base xl:text-xl tracking-tighter font-medium">
              {/* Username */}
              {user.username}
            </h5>
            <h6 className="text-sm xl:text-base tracking-tighter text-dashboardMain-unhighlighted">
              {/* Role */}
              {user.role}
            </h6>
          </div>

          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? (
              <X className="border-2 border-dashboardMain rounded-full" />
            ) : (
              <ChevronDown className="border-2 border-dashboardMain rounded-full" />
            )}
          </button>

          {isMenuOpen ? (
            <div className="absolute flex flex-col items-start w-[230px] top-[100%] right-0 bg-white shadow-md border border-gray-200 rounded-lg px-6 py-3 space-y-3 "
            ref={accountMenuRef}>
              <div className="flex items-center gap-3 w-full cursor-pointer hover:bg-dashboardMain">
                <UserCog size={25} className="text-dashboardMain-blue" />
                <div className="text-base xl:text-lg font-medium whitespace-nowrap">
                  Manage Account
                </div>
              </div>
              <hr className="w-full border-t border-gray-300 " />

              <div className="flex items-center gap-3 w-full cursor-pointer hover:bg-dashboardMain">
                <RefreshCw size={25} className="text-dashboardMain-purplish" />
                <div className="text-base xl:text-lg font-medium whitespace-nowrap">
                  Activity Log
                </div>
              </div>
              <hr className="w-full border-t border-gray-300" />

              <div className="flex items-center gap-3 w-full cursor-pointer hover:bg-dashboardMain">
                <LogOut size={25} className="text-dashboardMain-pinkish" />
                <div className="text-base xl:text-lg font-medium whitespace-nowrap">
                  Log out
                </div>
              </div>
            </div>
          ) : (
            null
          )}
        </div>
      </div>
      {/* <hr className="h-[1.5px] bg-dashboardMain-unhighlighted"/> */}
    </header>
  );
};

export default Header;
