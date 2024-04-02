import React from "react";
import questions from "../helpers/data";
import Question from "./Question";

const InterviewAccord = () => {
  return (
    <div>
      {questions.map((question) => (
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
};

export default InterviewAccord;
