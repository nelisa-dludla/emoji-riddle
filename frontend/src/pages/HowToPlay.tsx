import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HowToPlay = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* The div elements after the h3 and p elements are there to make sure each element is displayed on a new line. Without them, they bunch up. */}
        <Navbar />
        <section id="how-to-play">
          <h3 className="bg-white text-3xl font-bold p-4 mb-16 mt-10 shadow-xl inline-block">
            How to Play 📖
          </h3>
          <div></div>
          <p className="bg-white text-xl p-4 mb-5 shadow-xl inline-block">
            It’s simple! Look at the emojis and guess the word, phrase, or title
            they represent. 🧠
          </p>
          <div></div>
          <p className="bg-white text-xl p-4 mb-5 shadow-xl inline-block">
            Type your answer, hit Enter, and see if you’re right. ✅{" "}
          </p>
          <div></div>
          <p className="bg-white text-xl p-4 mb-5 shadow-xl inline-block">
            The faster you solve, the higher your score! 🥇
          </p>
          <div></div>
          <p className="bg-white text-xl p-4 mb-5 shadow-xl inline-block">
            e.g. 🎬 + 🍿 = Movie
          </p>
          <div></div>
          <h3 className="bg-white text-3xl font-bold p-4 mt-16 mb-10 shadow-xl inline-block">
            Ready to Play? 🎯
          </h3>
          <div></div>
          <p className="bg-white text-xl p-4 mb-5 shadow-xl inline-block">
            Hit the start button and begin your emoji riddle adventure! 🌟
          </p>
          <div></div>
          <p className="bg-white text-xl p-4 mb-5 shadow-xl inline-block">
            Challenge yourself, compete with friends, and climb the leaderboard!
            🏅
          </p>
          <div></div>
          <Link to="/play">
            <button className="bg-green-400 font-bold text-2xl p-7 my-16 shadow-xl btn">
              Start Playing 🎮
            </button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HowToPlay;
