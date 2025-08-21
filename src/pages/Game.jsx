import React, { useEffect, useState } from "react";
import getQuestions from "../services/api";

function Game({ category, difficulty }) {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function loadQuestions() {
      console.log("test from react");
      setLoading(true);
      const data = await getQuestions(10, category, difficulty);
      console.log(data);
      setQuestions(data);
      setLoading(false);
    }
    loadQuestions();
  }, [category, difficulty]);
  useEffect(() => {
    if (loading) {
      console.log("LOADING STARTED");
    } else {
      console.log("LOADING ENDED");
    }
  }, [loading]);
  return (
    <div>
      <h1>Game</h1>
    </div>
  );
}

export default Game;
