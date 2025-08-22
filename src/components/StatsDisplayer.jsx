import React from "react";

const StatsDisplayer = ({ score, numberOfQuestions, category, difficulty }) => {
  return (
    <div className="flex flex-col rounded-lg bg-primary-600 shadow-2xl w-80 justify-center items-center mt-10 h-90 md:w-150 md:h-140">
      <div>
        <h4 className="text-xl text-light-shade md:text-3xl">
          Category: {category}
        </h4>
        <h4 className="text-xl text-light-shade mt-5 md:text-3xl md:mt-10">
          Difficulty: {difficulty}
        </h4>
        <h4 className="text-xl text-light-shade mt-5 md:text-3xl md:mt-10">
          Questions: {numberOfQuestions}
        </h4>
        <div className="flex justify-start items-center">
          <h4 className="text-xl text-light-shade mt-5 mr-2 md:text-3xl md:mr-8 md:mt-10">
            Score: {score}{" "}
          </h4>
          <h4
            className={
              "mt-5 text-xl md:text-3xl md:mt-10 " +
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
