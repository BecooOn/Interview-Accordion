import React, { useState } from "react";
import { arrowdown, arrowup } from "../helpers/icons";

const Question = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleArrow = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="card m-2 p-2">
      <h2>
        {question.question}
        <span className="float-end" onClick={handleArrow}>{showAnswer ? arrowdown : arrowup}</span>
      </h2>
      <p>{question.answer}</p>
    </div>
  );
};

export default Question;
