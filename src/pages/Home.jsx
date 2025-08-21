import React, { useEffect, useState } from "react";
import Game from "./Game";
import Question from "../components/question";
function Home() {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-primary font-funnel text-6xl tracking-widest mt-35">
        retrivact
      </h1>
      {isGameStarted ? (
        <Game difficulty={difficulty} category={category} />
      ) : (
        <div className="flex flex-col mt-15 items-center">
          <select
            className="dropdown"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Books</option>
            <option value="11">Film</option>
            <option value="12">Music</option>
            <option value="13">Musicals & Theatres</option>
            <option value="14">Television</option>
            <option value="15">Video Games</option>
            <option value="16">Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Anime & Manga</option>
            <option value="32">Cartoon & Animations</option>
          </select>

          <select
            className="dropdown"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button
            onClick={() => setIsGameStarted(true)}
            className="btn p-2 mt-20 w-70"
          >
            Play
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
