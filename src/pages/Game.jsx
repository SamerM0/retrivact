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
  }
  async function loadQuestions() {
    setIsLoading(true);
    const data = await getData(10, category, difficulty);
    console.log(data);
    setData((prev) => [...prev, ...data]);
    setIsLoading(false);
  }
  useEffect(() => {
    if (isFirstLoading) {
      loadQuestions();
      setIsFirstLoading(false);
    }
    if (questionIndex + 5 >= data.length && !isLoading) {
      loadQuestions();
      console.log("loading new questions");
    }
  }, [questionIndex]);
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
