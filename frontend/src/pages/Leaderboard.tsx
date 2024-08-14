import Navbar from "../components/Navbar";

const Leaderboard = () => {
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
          {/* Leaderboard ot be rendered here */}
        </section>
      </div>
    </>
  );
};

export default Leaderboard;
