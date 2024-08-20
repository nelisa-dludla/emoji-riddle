import { useState, useEffect } from "react";
import LoadingRiddles from "../components/LoadingRiddles";
import GamePlay from "../components/GamePlay";

const riddlesData = {
  riddle1: {
    emojis: "🎬 🍿",
    answer: "Movie",
    hint: "A form of entertainment you watch on the big screen.",
    difficulty: "easy",
  },
  riddle2: {
    emojis: "🏠 🔑",
    answer: "Home Key",
    hint: "A button on your keyboard that you press to return to the main screen.",
    difficulty: "medium",
  },
  riddle3: {
    emojis: "🛏️ 💤",
    answer: "Sleep",
    hint: "What you do every night when you're tired.",
    difficulty: "easy",
  },
  riddle4: {
    emojis: "🍕 📞",
    answer: "Pizza Delivery",
    hint: "Something you might order to your house when you're hungry.",
    difficulty: "medium",
  },
  riddle5: {
    emojis: "🎧 🎵",
    answer: "Music",
    hint: "What you listen to when you want to relax or dance.",
    difficulty: "easy",
  },
  riddle6: {
    emojis: "🐶 👨‍🦯",
    answer: "Guide Dog",
    hint: "A helpful companion for those who need assistance getting around.",
    difficulty: "medium",
  },
  riddle7: {
    emojis: "📅 🖋️",
    answer: "Appointment",
    hint: "An event you schedule to meet with someone.",
    difficulty: "medium",
  },
  riddle8: {
    emojis: "💡 🤔",
    answer: "Idea",
    hint: "A thought that comes to you, often represented with a lightbulb.",
    difficulty: "easy",
  },
  riddle9: {
    emojis: "🚴‍♂️ 🌳",
    answer: "Bike Ride",
    hint: "An activity you might do in a park or on a trail.",
    difficulty: "easy",
  },
  riddle10: {
    emojis: "✈️ 🌍",
    answer: "Travel",
    hint: "What you do when you visit new places around the world.",
    difficulty: "medium",
  },
  riddle11: {
    emojis: "📚 📝",
    answer: "Homework",
    hint: "What students usually have to do after school.",
    difficulty: "easy",
  },
  riddle12: {
    emojis: "🚗 🛣️",
    answer: "Road Trip",
    hint: "A journey you take in a car, often for fun or vacation.",
    difficulty: "medium",
  },
  riddle13: {
    emojis: "🎂 🎉",
    answer: "Birthday",
    hint: "A special day celebrated once a year with cake and candles.",
    difficulty: "easy",
  },
  riddle14: {
    emojis: "🎄 🎁",
    answer: "Christmas",
    hint: "A holiday celebrated in December with trees and gifts.",
    difficulty: "easy",
  },
  riddle15: {
    emojis: "💼 📈",
    answer: "Business Meeting",
    hint: "A formal gathering to discuss work-related matters.",
    difficulty: "medium",
  },
  riddle16: {
    emojis: "🌙 🛌",
    answer: "Goodnight",
    hint: "A phrase you say before going to bed.",
    difficulty: "easy",
  },
  riddle17: {
    emojis: "📞 💬",
    answer: "Phone Call",
    hint: "A conversation you have over the phone.",
    difficulty: "easy",
  },
  riddle18: {
    emojis: "🚢 🌊",
    answer: "Cruise",
    hint: "A vacation you take on a large boat.",
    difficulty: "medium",
  },
  riddle19: {
    emojis: "📦 🚚",
    answer: "Package Delivery",
    hint: "Something that arrives at your house after ordering online.",
    difficulty: "medium",
  },
  riddle20: {
    emojis: "🏋️‍♂️ 💪",
    answer: "Workout",
    hint: "An activity you do to stay fit and healthy.",
    difficulty: "easy",
  },
};

const Play = () => {
  {
    /* Fetch riddles from MongoDB */
  }
  const [riddles, setRiddles] = useState({});
  const [loadingRiddles, setLoadingRiddles] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRiddles(riddlesData);
      setLoadingRiddles(false);
    }, 1000);
  });

  return (
    <>
      {loadingRiddles ? (
        <LoadingRiddles />
      ) : (
        <GamePlay riddles={riddles} setLoadingRiddles={setLoadingRiddles} />
      )}
    </>
  );
};

export default Play;
