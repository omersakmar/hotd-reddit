import React from "react";
import { Link } from "react-router-dom";

import HouseOfTheDragonLogo from "../images/house-of-the-dragon.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={HouseOfTheDragonLogo}
            className="mr-3 h-6 sm:h-9"
            alt="House of the Dragon symbol"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
            HOT D Reddit
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/freefolk">
              <li>/r/Freefolk</li>
            </Link>
            <Link to="/hotd">
              <li>/r/HouseOfTheDragon</li>
            </Link>
            <Link to="/asoiaf">
              <li>/r/asoiaf</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
