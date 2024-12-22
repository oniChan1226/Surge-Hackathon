import { Menu, MapPin, User, HousePlus } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

// gray and green theme

const Header = () => {
  return (
    <header className="bg-gradient-to-r bg-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              <HousePlus className="text-primary" />
              <span className="text-xl xl:text-2xl font-bold text-primary font-serif">
                DRMS
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold transition-colors xl:text-xl"
                    : "text-secondary-light hover:text-primary transition-colors font-medium xl:text-xl"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold transition-colors xl:text-xl"
                    : "text-secondary-light hover:text-primary transition-colors font-medium xl:text-xl"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold transition-colors xl:text-xl"
                    : "text-secondary-light hover:text-primary transition-colors font-medium xl:text-xl"
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-5">
              <button className="p-2 bg-white/10 rounded-full transition-colors flex space-x-1">
              <MapPin className="text-primary"/>
                <span className="text-white font-mono pr-1">Pakistan</span>
              </button>

              <button className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden">
                <Menu className="h-6 w-6 text-white" />
              </button>

              <Link to={"/login"} className="hidden md:flex items-center gap-2 bg-white/10 group px-4 py-2 rounded-lg transition-colors duration-200 hover:shadow-lg">
                <User className="h-5 w-5 text-white group-hover:text-primary-light transition-colors" />
                <span className="text-white font-medium group-hover:text-primary-light transition-colors">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
