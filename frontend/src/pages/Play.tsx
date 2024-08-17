import { useState, useEffect } from "react";
import LoadingRiddles from "../components/LoadingRiddles";
import GamePlay from "../components/GamePlay";

/*
const riddles = {
  riddle1: {
    emojis: "🎬 🍿",
    answer: "Movie",
    hint: "A form of entertainment you watch on the big screen.",
    difficulty: "easy",
  },
  riddle2: {
    emojis: "🏠 🔑",
    answer: "Home Key",
    hint: "A button on your keyboard that you press to return to the main screen",
    difficulty: "easy",
  },
  riddle3: {
    emojis: "🛏️ 💤",
    answer: "Sleep",
    hint: "What you do every night when you're tired.",
    difficulty: "easy",
  },
};
*/
const Play = () => {
  {
    /* Fetch riddles from MongoDB */
  }
  const [riddles, setRiddles] = useState({});
  const [loadingRiddles, setLoadingRiddles] = useState(true);

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

  return (
    <>
      {loadingRiddles ? <LoadingRiddles/> : <GamePlay riddles={riddles} setLoadingRiddles={setLoadingRiddles}/>}
    </>
  );
};

export default Play;
