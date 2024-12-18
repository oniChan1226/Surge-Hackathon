import { Link, NavLink, useNavigate } from "react-router-dom";
import { useRoleAuth } from "../../context/RoleAuth";
import { toast } from "react-toastify";

const Header = () => {
  const { role, updateRole } = useRoleAuth();
const navigate = useNavigate();

  const logout = () => {
    updateRole(null);
    navigate("/");
    toast.success("Logged out");
  }
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center lg:order-2 space-x-2">
            {role === "Admin" && (
              <Link to="/admin-generate-reports" className="text-white md:text-xl bg-slate-800 border border-slate-500 rounded-md  px-5 py-2 hover:bg-slate-900 duration-200">
                Generate Reports
              </Link>
            )}
            {role === "Organization" && (
              <Link to="/relief-add-resource" className="text-white md:text-xl bg-slate-800 border border-slate-500 rounded-md  px-5 py-2 hover:bg-slate-900 duration-200">
                Add resource/service
              </Link>
            )}
            {role === "Relief Worker" && (
              <Link to="/relief-add-resource" className="text-white md:text-xl bg-slate-800 border border-slate-500 rounded-md  px-5 py-2 hover:bg-slate-900 duration-200">
                Add resource/service
              </Link>
            )}
            {role === "User" && (
              <Link to="/user-report-need" className="text-white md:text-xl bg-slate-800 border border-slate-500 rounded-md  px-5 py-2 hover:bg-slate-900 duration-200">
                Report a need?
              </Link>
            )}
            <button className="text-white md:text-xl bg-slate-800 border border-slate-500 rounded-md  px-5 py-2 hover:bg-slate-900 duration-200"
            onClick={logout}>
                Logout
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white md:text-xl"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 md:text-xl"
                >
                  Company
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 md:text-xl"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 md:text-xl"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 md:text-xl"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
