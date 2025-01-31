import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) => ` ${isActive ? "text-[#9538E2]" : ""}`}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => ` ${isActive ? "text-[#9538E2]" : ""}`}
        to="/statistics"
      >
        Statistics
      </NavLink>
      <NavLink
        className={({ isActive }) => ` ${isActive ? "text-[#9538E2]" : ""}`}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-4">
        <button className="btn btn-circle">
          <LuShoppingCart size={20}></LuShoppingCart>
        </button>
        <button className="btn btn-circle">
          <CiHeart size={20}></CiHeart>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
