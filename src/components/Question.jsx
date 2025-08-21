import React, { useEffect, useState } from "react";
import {shuffle,decodeHtml} from "../services/utils";
const Question = ({ question, correctAnswer, incorrectAnswers, answer }) => {
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    setAnswers([
      ...incorrectAnswers.map((e, i) => (
        <button
          onClick={() => answer(false)}
          key={i}
          className="btn p-3 mt-5 text-md max-h-25 min-h-18"
        >
          {decodeHtml(e)}
        </button>
      )),
      <button
        onClick={() => answer(true)}
        key={5}
        className="btn p-3 mt-5 text-md max-h-25 min-h-18"
      >
        {decodeHtml(correctAnswer)}
      </button>,
    ]);
    setAnswers((prev) => shuffle(prev));
    console.log(correctAnswer);
  }, []);
  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center h-25 mt-10">
        <p className="text-dark-shade text-center text-lg mx-2">{decodeHtml(question)}</p>
      </div>
      <div className="grid grid-cols-1 w-80 ">{answers}</div>
    </div>
  );
};

export default Question;
