import React, { useCallback, useEffect, useState } from "react";
import getData from "../services/api";
import Question from "../components/question";
import StatsDisplayer from "../components/StatsDisplayer";

function Game({ category, difficulty }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [timer, setTimer] = useState(-1);
  const [score, setScore] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);
  function endGame() {
    console.log("ENDED");
    if (!isGameEnded) {
      setIsGameEnded(true);
    }
  }
  function answerQuestion(isCorrect) {
    if (isCorrect) {
      console.log("CORRECT");
      setScore((prev) => prev + 1);
    } else {
      console.log("INCORRECT");
    }
    setTimeout(() => {
      setQuestionIndex(questionIndex + 1);
    }, 500);
  }
  //calls the api and adds the new questions to the data array
  const loadQuestions = useCallback(async () => {
    setIsLoading(true);
    const data = await getData(10, category.value, difficulty.value);
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
      setTimer(10);
    }
    if (questionIndex + 5 >= data.length && !isLoading) {
      loadQuestions();
      console.log("loading new questions");
    }
    console.log(questionIndex);
  }, [questionIndex]);
  useEffect(() => {
    if (timer <= 0 && !isFirstLoading) {
      endGame();
    }
    if (!isFirstLoading && timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
  }, [timer, isFirstLoading]);
  return (
    <div>
      {isGameEnded && (
        <StatsDisplayer
          score={score}
          numberOfQuestions={questionIndex}
          category={category.text === undefined ? "Any" : category.text}
          difficulty={difficulty.text === undefined ? "Any" : difficulty.text}
        />
      )}
      {!isFirstLoading && data[questionIndex] && !isGameEnded && (
        <div>
          <h4 className="text-dark-shade text-center text-lg mt-6">
            {timer} {timer !== 1 ? "Seconds" : "Second"}
          </h4>
          <h3 className="text-dark-shade text-center text-2xl mt-4">
            Score {score}
          </h3>
          <Question
            question={data[questionIndex].question}
            correctAnswer={data[questionIndex].correct_answer}
            incorrectAnswers={[...data[questionIndex].incorrect_answers]}
            answer={answerQuestion}
            key={questionIndex}
          />
        </div>
      )}
      {isLoading && !isGameEnded && (
        <h4 className="text-dark-shade text-2xl fixed left-0 bottom-2 w-lvw text-center">
          Loading
        </h4>
      )}
    </div>
  );
}

export default Game;
