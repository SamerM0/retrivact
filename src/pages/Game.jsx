import React, { useCallback, useEffect, useState } from "react";
import getData from "../services/api";
import Question from "../components/Question";
import StatsDisplayer from "../components/StatsDisplayer";

function Game({ playAgain, category, difficulty }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [timer, setTimer] = useState(-1);
  const [score, setScore] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);
  function endGame() {
    if (!isGameEnded) {
      setIsGameEnded(true);
    }
  }
  function answerQuestion(isCorrect) {
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setTimeout(() => {
        setQuestionIndex(questionIndex + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setQuestionIndex(questionIndex + 1);
      }, 900);
    }
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
      setTimer(60);
    }
    if (questionIndex + 5 >= data.length && !isLoading) {
      loadQuestions();
    }
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
        <div className="flex flex-col justify-center items-center">
          <StatsDisplayer
            score={score}
            numberOfQuestions={questionIndex}
            category={category.text === undefined ? "Any" : category.text}
            difficulty={difficulty.text === undefined ? "Any" : difficulty.text}
          />
          <button
            className="btn hover:bg-primary-600 bg-primary p-2 mt-20 w-50 text-lg active:bg-dark-shade shadow-2xl md:w-80 md:h-15 md:text-2xl"
            onClick={playAgain}
          >
            Play Again
          </button>
        </div>
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
