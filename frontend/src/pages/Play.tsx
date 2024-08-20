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
  riddle21: {
    emojis: "🍔 🥤",
    answer: "Fast Food",
    hint: "Quick meals often found in a drive-thru.",
    difficulty: "easy",
  },
  riddle22: {
    emojis: "💻 🖥️",
    answer: "Computer",
    hint: "An electronic device used for work and play.",
    difficulty: "easy",
  },
  riddle23: {
    emojis: "🎨 🖌️",
    answer: "Painting",
    hint: "An artistic activity involving colors and brushes.",
    difficulty: "medium",
  },
  riddle24: {
    emojis: "🍎 📚",
    answer: "School",
    hint: "A place where you learn and have classes.",
    difficulty: "easy",
  },
  riddle25: {
    emojis: "🏆 🥇",
    answer: "Victory",
    hint: "Winning a competition or achieving success.",
    difficulty: "medium",
  },
  riddle26: {
    emojis: "🎡 🎠",
    answer: "Amusement Park",
    hint: "A place with rides and games for fun.",
    difficulty: "medium",
  },
  riddle27: {
    emojis: "🌮 🥑",
    answer: "Taco",
    hint: "A Mexican dish often filled with meat and veggies.",
    difficulty: "easy",
  },
  riddle28: {
    emojis: "📸 🖼️",
    answer: "Photograph",
    hint: "A picture taken with a camera.",
    difficulty: "easy",
  },
  riddle29: {
    emojis: "🌊 🏄‍♂️",
    answer: "Surfing",
    hint: "Riding waves on a board in the ocean.",
    difficulty: "medium",
  },
  riddle30: {
    emojis: "🍰 🎂",
    answer: "Dessert",
    hint: "Sweet treats usually enjoyed after a meal.",
    difficulty: "easy",
  },
  riddle31: {
    emojis: "🚀 🌌",
    answer: "Space Travel",
    hint: "Exploring beyond Earth's atmosphere.",
    difficulty: "medium",
  },
  riddle32: {
    emojis: "👨‍🎤 🎤",
    answer: "Singer",
    hint: "Someone who performs songs vocally.",
    difficulty: "easy",
  },
  riddle33: {
    emojis: "🛒 🏬",
    answer: "Shopping",
    hint: "Buying items from a store.",
    difficulty: "easy",
  },
  riddle34: {
    emojis: "🛳️ 🌴",
    answer: "Island Vacation",
    hint: "A relaxing trip to a tropical place.",
    difficulty: "medium",
  },
  riddle35: {
    emojis: "🎤 🎶",
    answer: "Concert",
    hint: "A live performance of music.",
    difficulty: "medium",
  },
  riddle36: {
    emojis: "🔑 🏠",
    answer: "House Key",
    hint: "An item used to unlock your home.",
    difficulty: "easy",
  },
  riddle37: {
    emojis: "🧩 🎲",
    answer: "Board Game",
    hint: "A game played on a board with pieces or cards.",
    difficulty: "medium",
  },
  riddle38: {
    emojis: "🚨 🚓",
    answer: "Emergency",
    hint: "A situation requiring immediate help.",
    difficulty: "medium",
  },
  riddle39: {
    emojis: "🎲 🎲",
    answer: "Dice",
    hint: "Cubical objects used in games of chance.",
    difficulty: "easy",
  },
  riddle40: {
    emojis: "🏔️ 🥾",
    answer: "Hiking",
    hint: "Walking in nature, often up a mountain.",
    difficulty: "medium",
  },
  riddle41: {
    emojis: "🎸 🎵",
    answer: "Rock Music",
    hint: "A genre of music often played with electric guitars.",
    difficulty: "medium",
  },
  riddle42: {
    emojis: "🚂 🌉",
    answer: "Train Ride",
    hint: "Traveling by a vehicle on rails.",
    difficulty: "medium",
  },
  riddle43: {
    emojis: "📖 ✍️",
    answer: "Writing",
    hint: "Creating text on paper or a screen.",
    difficulty: "easy",
  },
  riddle44: {
    emojis: "🏆 🎯",
    answer: "Achievement",
    hint: "Reaching a goal or winning a prize.",
    difficulty: "medium",
  },
  riddle45: {
    emojis: "🍽️ 🍷",
    answer: "Dinner",
    hint: "A meal eaten in the evening.",
    difficulty: "easy",
  },
  riddle46: {
    emojis: "🛏️ 📚",
    answer: "Bedtime Story",
    hint: "A tale read before going to sleep.",
    difficulty: "easy",
  },
  riddle47: {
    emojis: "🦄 🌈",
    answer: "Unicorn",
    hint: "A mythical horse-like creature with a single horn.",
    difficulty: "medium",
  },
  riddle48: {
    emojis: "🧩 🧠",
    answer: "Puzzle",
    hint: "A game or problem requiring thought to solve.",
    difficulty: "medium",
  },
  riddle49: {
    emojis: "👩‍🎓 🎓",
    answer: "Graduation",
    hint: "A ceremony marking the completion of studies.",
    difficulty: "easy",
  },
  riddle50: {
    emojis: "🚴‍♀️ 🚴‍♂️",
    answer: "Cycling",
    hint: "Riding a bicycle for exercise or leisure.",
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
