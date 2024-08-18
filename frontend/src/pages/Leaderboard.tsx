import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LeaderboardSkeletion from "../components/LeaderboardSkeleton";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import LeaderboardTable from "../components/LeaderboardTable";

/*
  useEffect(() => {
    const fetchRiddles = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/riddles");
        const data = await response.json();
        setRiddles(data);
        setLoadingRiddles(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchRiddles();
  }, [loadingRiddles]);
 */

const Leaderboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch("http://localhost:5000/leaderboard");
        const data = await response.json();
        setLeaderboard(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };
    fetchLeaderboardData();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        {/* The div elements after the h3 and p elements are there to make sure each element is displayed on a new line. Without them, they bunch up. */}
        <Navbar />
        <section id="leaderboard">
          <h3 className="bg-white text-3xl font-bold p-4 mb-16 mt-10 shadow-xl inline-block">
            Top Players 🏆
          </h3>
          <div></div>
          <p className="bg-white text-xl p-4 mb-5 shadow-xl inline-block">
            Do you have what it takes to be on the leaderboard?
          </p>
          <div></div>
          <p className="bg-white text-xl p-4 mb-5 shadow-xl inline-block">
            Solve riddles faster than anyone else to claim your spot! 💪
          </p>
          <div></div>
          {/* Leaderboard table */}

          {isLoading ? (
            <LeaderboardSkeletion />
          ) : (
            <LeaderboardTable leaderboardData={leaderboard} />
          )}
          <Link to="/play">
            <button className="bg-green-400 font-bold text-2xl p-7 my-16 shadow-xl btn">
              Start Playing 🎮
            </button>
          </Link>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Leaderboard;
