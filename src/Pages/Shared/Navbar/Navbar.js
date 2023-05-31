import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/mentorHub logo.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-gray-100 px-10 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Item 1</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <img className="w-[70%] md:w-[30%]" src={logo} alt=""></img>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
            <li>
              <Link>Find Your Mentor</Link>
            </li>
            <li>
              <Link>Courses</Link>
            </li>
            <li>
              <Link>Training</Link>
            </li>
            <li>
              <Link>For Business</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>

          {user?.uid ? (
            <button className="bg-transparent transition hover:-translate-y-1 hover:scale-105 duration-700 ease-in-out shadow-lg border-[2px] border-[#d63131] rounded-lg px-2 py-1 text-slate-600 hover:bg-teal-50 hover:text-[#98242C] font-semibold" onClick={handleLogOut}>
            <Link>Logout</Link>
          </button>
          ):(
            <button className="bg-transparent transition hover:-translate-y-1 hover:scale-105 duration-700 ease-in-out shadow-lg border-[2px] border-[#d63131] rounded-lg px-2 py-1 text-slate-600 hover:bg-teal-50 hover:text-[#98242C] font-semibold" >
            <Link to="/login">login/Signup</Link>
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
