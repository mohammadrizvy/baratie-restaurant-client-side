import React from "react";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="ms-8 me-8 mt-0">
      <div className="navbar bg-secondary rounded-br-lg rounded-bl-lg py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-primary lg:hidden"
            >
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="">Home</p>
              </li>
              <li>
                <p>Blogs</p>
              </li>
              <li>
                <p>Order Online</p>
              </li>
            </ul>
          </div>
          <div className="flex content-center">
            <a className="normal-case text-4xl font-bold text-primary ms-8 flex hover:scale-110 transition-transform duration-300">
              Hotel Baratie
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1">
            <p className="text-primary hover:scale-110 transition-transform duration-300">
              Home
            </p>
            <p className="me-8 ms-8 text-primary hover:scale-110 transition-transform duration-300">
              Blogs
            </p>
            <p className="text-primary hover:scale-110 transition-transform duration-300">
              Order Online
            </p>
          </div>
        </div>
        <div className="navbar-end">
          <ul className="flex me-8 align-middle">
            <div className=" text-primary text-m me-2 hover:scale-110 transition-transform duration-300">
              Login
            </div>
            <div className="text-white text-3xl hover:scale-110 transition-transform duration-300">
              <FaUserCircle />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
