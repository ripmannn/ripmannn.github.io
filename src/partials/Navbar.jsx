import { CircleUserRound, FolderGit2, Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full border-b-2 border-base-300 bg-base-200 shadow-md z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl space-x-1">
          <div className="avatar">
            <div className="w-7 rounded-lg">
              <img src="arief.jpg" alt="" />
            </div>
          </div>
          <span>AriefRp</span>
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown md:hidden dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-circle" onClick={toggleDropdown}>
            <Menu size={20} />
          </div>
          {isDropdownOpen && (
            <ul tabIndex={0} className="dropdown-content space-y-2 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border-2 border-base-300">
              <li>
                <NavLink to={"/"} onClick={closeDropdown}>
                  <CircleUserRound size={16} />
                  <span>Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/project"} onClick={closeDropdown}>
                  <FolderGit2 size={16} />
                  <span>Projects</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} onClick={closeDropdown}>
                  <Phone size={16} />
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <ul className="hidden md:flex menu menu-horizontal space-x-2 px-1">
          <li>
            <NavLink to={"/"}>
              <CircleUserRound size={20} />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/project"}>
              <FolderGit2 size={20} />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <Phone size={20} />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
