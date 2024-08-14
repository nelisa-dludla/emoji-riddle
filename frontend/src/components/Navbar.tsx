import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="p-5 border-b-2 border-black">
        {/* LHS */}
        <div>
          <ul className="flex flex-row my-auto">
            <li className="font-bold text-xl mr-7 p-2">🕵️‍♂️ Emoji Riddle</li>
            <Link to="/home">
              <li className="font-semibold mr-5 p-2 my-auto navbar-link">
                Home 🏠
              </li>
            </Link>
            <Link to="/how-to-play">
              <li className="font-semibold mr-5 p-2 my-auto navbar-link">
                How to Play 📖
              </li>
            </Link>
            <Link to="/leaderboard">
              <li className="font-semibold mr-5 p-2 my-auto navbar-link">
                Leaderboard 🏆
              </li>
            </Link>
          </ul>
        </div>
        {/* RHS */}
        <div></div>
      </nav>
    </>
  );
};

export default Navbar;
