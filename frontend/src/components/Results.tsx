import { Link } from "react-router-dom";

interface ResultsProps {
  score: number;
  resetGame: React.MouseEventHandler<HTMLButtonElement>;
}

const Results: React.FC<ResultsProps> = ({ score, resetGame }) => {
  return (
    <>
      {/* Transparent Background */}
      <div className="transparent-bg absolute top-0 left-0 w-full h-full z-10 p-10 flex flex-col justify-center items-center">
        {/* Results */}
        <div className="emoji-yellow-bg p-10 shadow-xl">
          <h3 className="bg-white text-xl font-bold p-4 mb-10 shadow-xl inline-block">
            Results:
          </h3>
          <div></div>
          <p className="bg-white text-xl p-4 mb-16 shadow-xl inline-block">
            Score: {score}
          </p>
          <div></div>
          <button
            onClick={resetGame}
            className="bg-green-400 text-xl font-bold p-7 mr-10 shadow-xl btn"
          >
            Play Again? 🎮
          </button>
          <Link to="/home">
            <button className="bg-red-500 text-xl font-bold p-7 shadow-xl btn">
              Quit
            </button>
          </Link>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Results;
