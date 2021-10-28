import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import headerImg from "../../images/header_images/icons8-delivery-50.png";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(1);
  const { user, logOut } = useAuth();

  const clickHandler = () => {
    setClick(click + 1);
  };

  return (
    <div className="bg-indigo-200">
      <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container flex justify-between h-16 mx-auto">
          {/* secondary nav */}
          <a
            href="/"
            aria-label="Back to homepage"
            className="flex items-center"
          >
            {/* logo */}
            <div>
              <img src={headerImg} alt="" />
            </div>
            {/* primary-nav */}
            <div className="hidden sticky md:flex lg:text-3xl font-bold ml-1 lg:ml-3 sm:text-xl">
              <span className="text-indigo-500">Shift</span>us
            </div>
          </a>
          <ul className="hidden items-stretch space-x-3 lg:flex header-navs font-bold">
            <li className="flex">
              <NavLink to="/home" className="flex items-center px-3 -mb-1">
                Home
              </NavLink>
            </li>
            {user?.email ? (
              <>
                <li className="flex">
                  <NavLink
                    to="/myBookings"
                    className="flex items-center px-3 -mb-1"
                  >
                    My Bookings
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to="/allBookings"
                    className="flex items-center px-3 -mb-1"
                  >
                    Manage All Bookings
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to="/addBooking"
                    className="flex items-center px-3 -mb-1"
                  >
                    Add a new service
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
            <li className="flex">
              <NavLink to="/contact" className="flex items-center px-3 -mb-1">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center font-bold md:space-x-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 dark:text-coolGray-100"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-coolGray-800 dark:text-coolGray-100 focus:dark:bg-coolGray-900"
              />
            </div>
            {user?.email ? (
              <div>
                <div className="flex justify-btween gap-2">
                  {user?.photoURL && (
                    <img
                      className="rounded-full"
                      width="50px"
                      src={user.photoURL}
                      alt=""
                    />
                  )}
                  <button
                    onClick={logOut}
                    type="button"
                    id="login-btn"
                    className="hidden px-6 py-2 mt-4 font-semibold rounded bg-indigo-400 lg:block dark:bg-violet-400 dark:text-coolGray-900"
                  >
                    Log out
                  </button>
                </div>
                <div>
                  <p className="text-sm text-left">{user?.displayName}</p>
                </div>
              </div>
            ) : (
              <NavLink
                to="/login"
                type="button"
                id="login-btn"
                className="hidden px-6 py-2 font-semibold rounded bg-indigo-400 lg:block dark:bg-violet-400 dark:text-coolGray-900"
              >
                Log in
              </NavLink>
            )}
          </div>
          {/* mobile-button */}
          <div className="md:hidden flex items-center">
            <button onClick={clickHandler} className="mobile-menu-button">
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* mobile menu */}
      <div className={click % 2 == 0 ? "block bg-gray-400" : "hidden"}>
        <NavLink
          to="/home"
          className="block px-4 py-2 text-sm font-bold hover:bg-gray-200"
        >
          Home
        </NavLink>
        <NavLink
          to="/myBookings"
          className="block px-4 py-2 text-sm font-bold hover:bg-gray-200"
        >
          My Bookings
        </NavLink>
        <NavLink
          to="/allBookings"
          className="block px-4 py-2 text-sm font-bold hover:bg-gray-200"
        >
          Manage All Bookings
        </NavLink>
        <NavLink
          to="/addBooking"
          className="block px-4 py-2 text-sm font-bold hover:bg-gray-200"
        >
          Add a new service
        </NavLink>
        <NavLink
          to="/contact"
          className="block px-4 py-2 text-sm font-bold hover:bg-gray-200"
        >
          Contact
        </NavLink>
        {user?.email ? (
          <div className="block px-4 py-2 text-sm font-bold hover:bg-gray-200">
            <button
              onClick={logOut}
              type="button"
              id="login-btn"
              className="text-sm font-bold"
            >
              Log out
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            type="button"
            id="login-btn"
            className="block px-4 py-2 text-sm font-bold hover:bg-gray-200"
          >
            Log in
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
