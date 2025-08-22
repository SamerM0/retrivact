import React from "react";

const StatsDisplayer = ({ score, numberOfQuestions, category, difficulty }) => {
  return (
    <div className="flex flex-col rounded-lg bg-primary-600 shadow-2xl w-80 justify-center items-center mt-10 h-90">
      <div>
        <h4 className="text-2xl text-light-shade ">Category: {category}</h4>
        <h4 className="text-2xl text-light-shade mt-5">
          Difficulty: {difficulty}
        </h4>
        <h4 className="text-2xl text-light-shade mt-5">
          Questions: {numberOfQuestions}
        </h4>
        <div className="flex justify-center items-center">
          <h4 className="text-2xl text-light-shade mt-5 mr-2">
            Score: {score}{" "}
          </h4>
          <h4
            className={
              "mt-5 text-2xl " +
              (score / numberOfQuestions >= 0.5 ? "text-success" : "text-error")
            }
          >
            ({Math.round((score / numberOfQuestions) * 100)}%)
          </h4>
        </div>
      </div>
    </div>
  );
};

export default StatsDisplayer;
