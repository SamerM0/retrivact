import React from "react";

const Question = ({ title, answers, answer }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center h-25 mt-10">
        <p className="text-dark-shade text-center text-lg">{title}</p>
      </div>
      <div className="grid grid-cols-1 w-80 ">
        {answers.map((e, i) => (
          <button
            onClick={() => answer()}
            key={i}
            className="btn p-3 mt-5 text-md max-h-25 min-h-18"
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
