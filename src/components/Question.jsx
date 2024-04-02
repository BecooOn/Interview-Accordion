import React, { useState } from "react";
import { arrowdown, arrowup } from "../helpers/icons";

const Question = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleArrow = () => {
    setShowAnswer(!showAnswer);
  };
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={`card m-auto mt-3 p-2 w-50 ${isHovered ? "hovered" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h2 className="text-primary">
        {question.id}.{question.question}
        <span type="button" className="float-end" onClick={handleArrow}>
          {showAnswer ? arrowdown : arrowup}
        </span>
      </h2>
      {showAnswer && <p className="fs-5">{question.answer}</p>}
    </div>
  );
};

export default Question;
