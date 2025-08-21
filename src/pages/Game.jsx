import React, { useCallback, useEffect, useState } from "react";
import getData from "../services/api";
import Question from "../components/question";

function Game({ category, difficulty }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [timer, setTimer] = useState(-1);
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
    if (isFirstLoading) {
      setIsFirstLoading(false);
    }
  }, [category, difficulty, isFirstLoading]);
  //checks when to load new questions based on the current question index
  useEffect(() => {
    if (isFirstLoading) {
      loadQuestions();
      setTimer(60);
    }
    if (questionIndex + 5 >= data.length && !isLoading) {
      loadQuestions();
      console.log("loading new questions");
    }
    console.log(questionIndex);
  }, [questionIndex]);
  useEffect(() => {
    if (!isFirstLoading && timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
  }, [timer, isFirstLoading]);
  return (
    <div>
      {!isFirstLoading && data[questionIndex] && (
        <div>
          <p className="text-dark-shade text-center text-lg mt-2">
            Time: {timer}
          </p>
          <Question
            title={data[questionIndex].question}
            answers={[
              data[questionIndex].correct_answer,
              ...data[questionIndex].incorrect_answers,
            ]}
            answer={answerQuestion}
          />
        </div>
      )}
      {isLoading && (
        <p className="text-dark-shade text-2xl fixed left-0 bottom-0 w-lvw text-center">
          Loading
        </p>
      )}
    </div>
  );
}

export default Game;
