import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface HamburgerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<HamburgerProps> = ({ setIsOpen }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="h-screen w-screen emoji-yellow-bg absolute z-10 flex flex-col items-end">
        <button
          className="flex justify-center items-center md:hidden text-xl p-4 mb-40"
          type="button"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faTimes} style={{ color: "#000000" }} />
        </button>
        <ul className="flex flex-col justify-center items-center mx-auto">
          <Link to="/home" onClick={handleClick}>
            <li className="font-semibold text-xl p-4 my-auto navbar-link">
              Home 🏠
            </li>
          </Link>
          <Link to="/how-to-play" onClick={handleClick}>
            <li className="font-semibold text-xl p-4 my-auto navbar-link">
              How to Play 📖
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
