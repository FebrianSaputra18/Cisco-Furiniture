import React, { useEffect, useState } from "react";
import { logo } from "../assets/icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ toggleCart }) => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const path = location.pathname;
    setActivePage(path);
  }, [location]);
  return (
    <div className="flex justify-between h-24 w-full mx-auto px-24 items-center shadow-md bg-white">
      <div className="navbar-right flex items-center">
        <div className="logo flex gap-2 items-center pr-6">
          <img className="h-6 w-auto" src={logo} alt="" />
          <h1 className="font-playfair text-2xl text-amber-700">Furniture</h1>
        </div>
        <ul className="flex gap-6 text-md items-center font-bold font-playfair">
          <li>
            <Link
              to="/"
              className={
                activePage === "/"
                  ? "text-amber-700 hover:text-amber-500"
                  : "text-amber-200 hover:text-amber-500"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                activePage === "/about"
                  ? "text-amber-700 hover:text-amber-500"
                  : "text-amber-200 hover:text-amber-500"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className={
                activePage === "/product"
                  ? "text-amber-700 hover:text-amber-500"
                  : "text-amber-200 hover:text-amber-500"
              }
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                activePage === "/contact"
                  ? "text-amber-700 hover:text-amber-500"
                  : "text-amber-200 hover:text-amber-500"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-left flex gap-10">
        <button className=" text-amber-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <button className=" text-amber-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
        <button onClick={toggleCart} className=" text-amber-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
        <button className=" text-white bg-amber-700 h-10 w-32 justify-center flex items-center rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p>Jonh Doe</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
