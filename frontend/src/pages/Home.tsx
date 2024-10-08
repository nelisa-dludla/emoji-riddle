import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <section id="home" className="flex flex-col md:flex-row sm:h-screen items-center">
          {/* LHS */}
          <div className="p-6 mt-5 mb:mt-0">
            <h2 className="bg-white font-bold text-lg md:text-4xl p-4 mb-7 s🕵️‍♂️hadow-xl inline-block">
              Decode the emojis, crack the riddle! 🧩
            </h2>
            <div></div>
            <p className="bg-white text-md md:text-xl p-4 mb-5 shadow-xl inline-block">
              Welcome to Emoji Riddle, the fun and addictive game where emojis
              hold the clues!
            </p>
            <div></div>
            <p className="bg-white text-md md:text-xl p-4 mb-5 shadow-xl inline-block">
              Can you guess the word, phrase, or title from the emojis? 🕵️‍♂️{" "}
            </p>
            <div></div>
            <p className="bg-white text-md md:text-xl p-4 shadow-xl inline-block">
              Put your emoji decoding skills to the test and see how many
              riddles you can solve! 🤔
            </p>
            <div></div>
          </div>
          {/* RHS */}
          <div className="p-6 mr-auto md:mr-0">
            <Link to="/play">
              <button className="bg-green-400 text-lg md:text-2xl font-bold p-4 md:p-7 shadow-xl btn">
                Start Playing 🎮
              </button>
            </Link>
            <p className="mt-5">
              <i>Jump right into the challenge! 🚀</i>
            </p>
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
