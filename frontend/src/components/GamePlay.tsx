import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Results from "../components/Results";

const knuthShuffle = (arr) => {
    var rand, temp, i;
 
    for (i = arr.length - 1; i > 0; i -= 1) {
        rand = Math.floor((i + 1) * Math.random());//get random between zero and i (inclusive)
        temp = arr[rand];//swap i and the zero-indexed number
        arr[rand] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

const GamePlay = ({ riddles, setLoadingRiddles }) => {
  {
    /* Get keys for all objects */
  }
  //console.log(data);
  const riddleKeys = Object.keys(riddles);
  const randomizedRiddleKeys = knuthShuffle(riddleKeys);
  /* Score */
  const [score, setScore] = useState(0);
  /* Current Index of randomizedRiddleKeys */
  let [currentKeyIndex, setCurrentKeyIndex] = useState(0);

  /* Current Riddle Key
   */ const [currentRiddleKey, setCurrentRiddleKey] = useState(
    randomizedRiddleKeys[currentKeyIndex],
  );
  /* Current Riddle */
  const [currentRiddle, setCurrentRiddle] = useState(riddles[currentRiddleKey]);
  /* Player Answer
   */ const [playerAnswer, setPlayerAnswer] = useState("");
  /* Is the answer correct or not */
  const [feedback, setFeedback] = useState("");
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  let timerId = useRef(null);
  const [gameOver, setGameOver] = useState(false);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId.current);
          setGameOver(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const resetGame = () => {
    setScore(0);
    setCurrentKeyIndex(0);
    setCurrentKeyIndex((prevIndex) => {
      const newIndex = 0;

      setCurrentRiddleKey(randomizedRiddleKeys[newIndex]);
      setCurrentRiddle(riddles[randomizedRiddleKeys[newIndex]]);

      return newIndex;
    });
    setPlayerAnswer("");
    setFeedback("");
    setIsFeedbackVisible(false);
    setIsHintVisible(false);
    setTimeLeft(60);
    setGameOver(false);
    setLoadingRiddles(true);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerId.current);
  }, [resetGame]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* Check if answer is correct */
    if (
      playerAnswer.toLowerCase().trim() === currentRiddle.answer.toLowerCase()
    ) {
      if (isHintVisible) {
        setScore((prevScore) => prevScore + 1);
      } else {
        setScore((prevScore) => prevScore + 3);
      }
      setIsHintVisible(false);
      setIsFeedbackVisible(true);
      setFeedback("Correct! 🎉");
      /* Increase index only for the size of randomizedRiddleKeys */
      setCurrentKeyIndex((prevIndex) => {
        const newIndex = prevIndex + 1;

        if (newIndex < randomizedRiddleKeys.length) {
          setCurrentRiddleKey(randomizedRiddleKeys[newIndex]);
          setCurrentRiddle(riddles[randomizedRiddleKeys[newIndex]]);
        }

        return newIndex;
      });
      /* Reset player answer to an empty string */
      setPlayerAnswer("");
    } else {
      setIsFeedbackVisible(true);
      setFeedback("Try Again!");
    }

    setTimeout(() => {
      setIsFeedbackVisible(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerAnswer(e.target.value);
  };

  const handleClick = () => {
    setIsHintVisible(true);
  };

  return (
    <>
      <div className="container mx-auto">
        <section id="play" className="p-10 h-screen">
          {/* Game Over Results */}
          {gameOver && <Results score={score} resetGame={resetGame} />}
          {/* Top */}
          <div className="grid grid-cols-2 gap-4">
            <p className="font-bold text-md md:text-3xl">
              Time:{" "}
              <span className="bg-white p-3 ml-4 shadow-xl inline-block">
                {formatTime(timeLeft)}
              </span>
            </p>
            <p className="font-bold text-md md:text-3xl text-right">
              Score:{" "}
              <span className="bg-white p-3 ml-4 shadow-xl inline-block">
                {score}
              </span>
            </p>
            <p className="font-bold text-md md:text-3xl h-fit flex md:flex-none">
              Difficulty:{" "}
              <span className="bg-white p-3 ml-4 shadow-xl inline-block">
                {currentRiddle.difficulty.charAt(0).toUpperCase() +
                  currentRiddle.difficulty.slice(1)}
              </span>
            </p>
            <Link className="ml-auto" to="/home">
              <button className="bg-red-500 font-bold text-md md:text-xl p-4 shadow-xl max-w-24 btn">
                Quit
              </button>
            </Link>
          </div>
          {/* Middle */}
          <div className="mt-20 md:mt-28 max-w-3xl mx-auto">
            <p className="bg-white shadow-xl p-20 text-5xl md:text-9xl text-center">
              {currentRiddle.emojis}
            </p>
          </div>

          {/* Feedback */}
          <div className="mt-16 text-center font-bold text-xl md:text-4xl">
            {isFeedbackVisible && feedback}
          </div>
          {/* Hint */}
          <div className="my-10 md:my-16 text-center p-2 text md:text-xl">
            <i>{isHintVisible && `"${currentRiddle.hint}"`}</i>
          </div>

          {/* Bottom */}
          <div className="flex mb-24">
            <div className="flex md:flex-row mx-auto">
              <button
                onClick={handleClick}
                className="bg-gray-400 font-bold text-md md:text-xl p-4 shadow-xl btn"
              >
                Hint
              </button>
              <form className="flex flex-row" onSubmit={handleSubmit} action="">
                <input
                  className="bg-white p-4 mx-5 text-md md:text-xl shadow-xl w-full"
                  type="text"
                  name="answer"
                  value={playerAnswer}
                  onChange={handleChange}
                  placeholder="Your answer goes here..."
                />
                <button
                  className="bg-green-400 font-bold text-md md:text-xl p-4 shadow-xl btn"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GamePlay;
