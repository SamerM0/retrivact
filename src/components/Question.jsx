import React from "react";

const Question = ({ title, answers, answer }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button className="bg-primary" onClick={() => answer()} >next question</button>
    </div>
  );
};

export default Question;
