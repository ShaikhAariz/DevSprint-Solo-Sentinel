import React from "react";

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="retro-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;

