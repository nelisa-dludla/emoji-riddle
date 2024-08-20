import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen ? (
        <HamburgerMenu setIsOpen={setIsOpen} />
      ) : (
        <nav className="p-5 border-b-2 border-black flex flex-row justify-between">
          {/* LHS */}
          <div>
            <ul className="flex flex-row justify-center items-center">
              <li className="font-bold text-md md:text-xl mr-7 p-2">
                🕵️‍♂️ Emoji Riddle
              </li>
              <Link to="/home" className="hidden md:block">
                <li className="font-semibold text-sm mr-5 p-2 my-auto navbar-link">
                  Home 🏠
                </li>
              </Link>
              <Link to="/how-to-play" className="hidden md:block">
                <li className="font-semibold text-sm mr-5 p-2 my-auto navbar-link">
                  How to Play 📖
                </li>
              </Link>
            </ul>
          </div>
          {/* RHS */}
          <button
            className="flex justify-center items-center md:hidden text-xl p-4"
            type="button"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
          </button>
        </nav>
      )}
    </>
  );
};

export default Navbar;
