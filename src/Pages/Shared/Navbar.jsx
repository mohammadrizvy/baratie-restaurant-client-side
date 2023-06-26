import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user?.email);
  console.log(user?.displayName);
  console.log(user?.photoURL);

   const photoURL = user && user.photoURL;
    const userName = user && user.displayName;

  const handleLogout = () => {
    logout() 
    .then()
    .catch((err) => {
      console.log(err)
    })

  }
  return (
    <div className="ms-8 me-8 mt-0">
      <div className="navbar bg-secondary rounded-br-lg rounded-bl-lg py-6">
        <div className="navbar-start flex flex-col lg:flex-row">
          <div className="dropdown mb-3 lg:mb-0">
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
                <Link to={"/"}>
                  <p className="">Home</p>
                </Link>
              </li>
              <li>
                <Link to={"/blogs"}>
                  <p>Blogs</p>
                </Link>
              </li>
              <li>
                <Link to={"/orderonline"}>
                  <p>Order Online</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex content-center">
            <a className="normal-case text-4xl font-bold text-primary ms-8 flex hover:scale-110 transition-transform duration-300">
              Baratie Restaurant
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1">
            <Link to={"/"}>
              <p className="text-primary hover:scale-110 transition-transform duration-300">
                Home
              </p>
            </Link>
            <Link to={"/blogs"}>
              <p className="me-8 ms-8 text-primary hover:scale-110 transition-transform duration-300">
                Blogs
              </p>
            </Link>
            <Link
              className="text-primary hover:scale-110 transition-transform duration-300"
              to={"/orderonline"}>
              <p>Order Online</p>
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <ul className="flex me-8 align-middle items-center">
            {user?.photoURL ? (
              <div className="tooltip tooltip-left" data-tip={userName}>
                <img
                  className="w-10   rounded-full text-white text-3xl hover:scale-110 transition-transform duration-300"
                  src={photoURL}
                  alt="User Photo"
                />
              </div>
            ) : (
              <div className="tooltip tooltip-left" data-tip="Guest">
                <img
                  className="w-10 rounded-full  ring-offset-base-100 ring-offset-2 bg-white text-3xl hover:scale-110 transition-transform duration-300"
                  src="https://i.ibb.co/m6k8XWR/Pngtree-user-avatar-placeholder-black-6796227.png"
                  alt="User Photo"
                />
              </div>
            )}

            {user?.email ? (
              <Link to={"/"}>
                <div
                  onClick={handleLogout}
                  className="text-primary text-m ms-4 hover:scale-110 transition-transform duration-300"
                >
                  Logout
                </div>
              </Link>
            ) : (
              <Link to={"/login"}>
                <div className="text-primary text-m ms-4 hover:scale-110 transition-transform duration-300">
                  Login
                </div>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
