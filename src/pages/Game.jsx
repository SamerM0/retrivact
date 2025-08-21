import React, { useEffect, useState } from "react";
import getData from "../services/api";
import Question from "../components/question";

function Game({ category, difficulty }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  function answer() {
    setQuestionIndex(questionIndex + 1);
  };
  useEffect(() => {
    async function loadQuestions() {
      setIsLoading(true);
      const data = await getData(10, category, difficulty);
      console.log(data);
      setData((prev) => [...prev, ...data]);
      setIsLoading(false);
    }
    loadQuestions();
  }, []);
  useEffect(() => {
    if (isLoading) {
      console.log("LOADING STARTED");
    } else {
      console.log("LOADING ENDED");

      if (isFirstLoading) {
        setIsFirstLoading(false);
      }
    }
  }, [isLoading]);
  
  return (
    <div>
      {!isFirstLoading && data[questionIndex] && (
        <Question title={data[questionIndex].question} answer={answer} />
      )}
      {isLoading && <h1>Loading</h1>}
    </div>
  );
}

export default Game;
