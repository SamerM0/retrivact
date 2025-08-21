import React, { useCallback, useEffect, useState } from "react";
import getData from "../services/api";
import Question from "../components/question";

function Game({ category, difficulty }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  function answerQuestion() {
    setQuestionIndex(questionIndex + 1);
  }
  //calls the api and adds the new questions to the data array
  const loadQuestions = useCallback(async () => {
    setIsLoading(true);
    const data = await getData(10, category, difficulty);
    console.log(data);
    setData((prev) => [...prev, ...data]);
    setIsLoading(false);
  }, [category, difficulty]);
  //checks when to load new questions based on the current question index
  useEffect(() => {
    if (isFirstLoading) {
      loadQuestions();
      setIsFirstLoading(false);
    }
    if (questionIndex + 5 >= data.length && !isLoading) {
      loadQuestions();
      console.log("loading new questions");
    }
    console.log(questionIndex);
  }, [questionIndex]);
  return (
    <div>
      {!isFirstLoading && data[questionIndex] && (
        <Question
          title={data[questionIndex].question}
          answers={[
            data[questionIndex].correct_answer,
            ...data[questionIndex].incorrect_answers,
          ]}
          answer={answerQuestion}
        />
      )}
      {isLoading && <h1>Loading</h1>}
    </div>
  );
}

export default Game;
