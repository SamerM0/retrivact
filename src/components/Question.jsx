import React, { useEffect, useState } from "react";
import { shuffle, decodeHtml } from "../services/utils";
const Question = ({ question, correctAnswer, incorrectAnswers, answer }) => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(-1);
  function handleClick(index, isCorrect) {
    if (!isAnswered) {
      setIsAnswered(true);
      answer(isCorrect)
      setAnswerIndex(index);
    }
  }
  useEffect(() => {
    let tempAnswers = [
      ...incorrectAnswers.map((e) => ({ answer: e, isCorrect: false })),
      { answer: correctAnswer, isCorrect: true },
    ];
    setAnswers(shuffle(tempAnswers));
    console.log(correctAnswer);
  }, []);
  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center h-25">
        <p className="text-dark-shade text-center text-lg mx-2">
          {decodeHtml(question)}
        </p>
      </div>
      <div className="grid grid-cols-1 w-80 ">
        {answers.map((e, i) => {
          let classbtn = "btn p-3 mt-5 text-md max-h-25 min-h-18";
          if (isAnswered) {
            if (e.isCorrect) {
              classbtn += " bg-success";
            } else if (!e.isCorrect && i === answerIndex) {
              classbtn += " bg-error";
            } else {
              classbtn += " bg-primary";
            }
          } else {
            classbtn += " bg-primary hover:bg-primary-600";
          }
          return (
            <button
              key={i}
              onClick={() => handleClick(i, e.isCorrect)}
              className={classbtn}
            >
              {decodeHtml(e.answer)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
